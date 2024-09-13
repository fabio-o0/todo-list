import '@styles/TodoInput.css'
import { Ref, useState } from 'react'

interface TodoInputProps {
    inputValue: string,
    setInputValue: Function,
    updateTodos: Function,
    inputRef: Ref<HTMLInputElement>
}

function TodoInput({ inputValue, setInputValue, updateTodos, inputRef }: TodoInputProps) {

    function addTodo() {
        if (inputValue == '') return;
        updateTodos(inputValue);
        setInputValue('');
    }

    function addOnEnter(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            addTodo();
        }
    }

    return (
        <div className='todo-input-wrapper'>
            <input ref={inputRef} value={inputValue} onChange={(e) => {
                setInputValue(e.target.value);
            }} onKeyDown={addOnEnter} className="todo-input" placeholder="Enter todo..." type="text"></input>
            <button onClick={addTodo} className='todo-input-button'>Add</button>
        </div>
    )
}

export default TodoInput

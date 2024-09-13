
import { useRef, useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddTodos(todo: string) {
    const newTodoList = [...todos, todo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index: number) {
    if (index >= 0 && index < todos.length) {
      const newTodoList = todos.filter((_, todoIndex) => todoIndex != index);
      persistData(newTodoList);
      setTodos(newTodoList);
    }
  }

  function handleEditTodo(index: number) {
    if (index >= 0 && index < todos.length) {
      setInputValue(todos[index]);
      if (index >= 0 && index < todos.length) {
        const newTodoList = todos.filter((_, todoIndex) => todoIndex != index);
        setTodos(newTodoList);
      }
      focusInput();
    }
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  function persistData(todosData: string[]) {
    localStorage.setItem('todos', JSON.stringify({ todos: todosData }));
  }

  useEffect(() => {
    if (localStorage) {
      let localTodos = localStorage.getItem('todos');
      if (localTodos) {
        let jsonTodos = JSON.parse(localTodos).todos;
        setTodos(jsonTodos);
      }
    }
  }, []);


  return (
    <>
      <h1 className='title'>TODO</h1>
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} updateTodos={handleAddTodos} inputRef={inputRef} />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} editTodo={handleEditTodo} />
    </>
  )
}

export default App

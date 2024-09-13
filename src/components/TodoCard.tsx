import '@styles/TodoCard.css'

interface TodoCardProps {
    index: number,
    name: string,
    deleteTodo: (index: number) => void,
    editTodo: (index: number) => void
}

function TodoCard({ index, name, deleteTodo, editTodo }: TodoCardProps) {
    return (
        <div className='item-container'>
            <li style={{ listStyleType: 'none' }}>
                <div className="todo-item-container">
                    <p className='todo-item-name'>{name}</p>
                    <div className='icons-wrapper'>
                        <i onClick={() => editTodo(index)} className="fa-solid fa-pen-to-square icon"></i>
                        <i onClick={() => deleteTodo(index)} className="fa-solid fa-delete-left icon" ></i>
                    </div>
                </div>
            </li>
        </div>

    )
}

export default TodoCard

import TodoCard from "./TodoCard";

interface TodoListProps {
    todos: string[],
    deleteTodo: (index: number) => void,
    editTodo: (index: number) => void,
}

function TodoList({ todos, deleteTodo, editTodo }: TodoListProps) {

    return (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {todos.map((todo, index) => <TodoCard key={index} index={index} name={todo} deleteTodo={deleteTodo} editTodo={editTodo} />)}
        </ul>
    )
}

export default TodoList

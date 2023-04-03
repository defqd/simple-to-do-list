import { TodoListItem } from "./TodoListItem";

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteCheckedTodo: DeleteCheckedTodos;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteCheckedTodo }) => {
    return (
        <div className="todo-list">
            <ul>
                {
                    todos.map((todo) => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo} toggleTodo={toggleTodo} />
                    ))
                }
            </ul>
            <button className="delete-button" onClick={deleteCheckedTodo}>Delete checked</button>
        </div>

    );
}
import { TodoListItem } from "./TodoListItem";

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteCheckedTodo: DeleteCheckedTodos;
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo, deleteCheckedTodo}) =>{
    return(
        <div className = "TodoList">
            <button onClick={deleteCheckedTodo}>Delete checked todos</button>
            <ul>
            {
                todos.map((todo) => (
                    <TodoListItem 
                    key={todo.id} 
                    todo={todo} toggleTodo={toggleTodo} />
                ))
            }
            </ul>
        </div>
        
    );
}
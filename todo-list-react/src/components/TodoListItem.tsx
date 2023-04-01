import React from 'react';
import "../styles/TodoListItem.css";

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
    return(
        <li>
            <label className={todo.status ? "complete" : undefined}>
                <input type = 'checkbox' 
                    checked = {todo.status}
                    onChange = {() => toggleTodo(todo)} /> 
                {todo.description}
            </label>
        </li>
    );
}
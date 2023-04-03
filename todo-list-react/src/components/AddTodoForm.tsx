import { useState } from "react";

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [description, setDescription] = useState<string>('');

    return (
        <form className="todo-form">
            <input type="text"
                value={description}
                placeholder="Enter todo"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}>
            </input>
            <button className="add-button"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(description);
                    setDescription('');
                }}
            >
                Add todo
            </button>
        </form>
    );
}
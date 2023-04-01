import { useState } from "react";

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    const [description, setDescription] = useState<string>('');

    return(
        <form>
           <input type="text"
                value = {description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}>
            </input>
           <button 
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
type Todo = {
    id: number,
    description: string;
    status: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (description: string) => void;

type DeleteCheckedTodos = () => void;
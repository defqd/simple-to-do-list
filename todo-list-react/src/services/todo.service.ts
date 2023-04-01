import axios from "axios";

const API_URL = 'https://localhost:7044/api/Todo/';

class TodoSerevice{
    getAllTodos(){  
        const response = axios.get(API_URL + 'all');

        return response;
    }

    addTodo(description: string){
        const response = axios.post(API_URL + 'add', {description: description, status: false});

        return response;
    }

    toggleTodo(selectedTodo: Todo){
        const response = axios.put(API_URL + `${selectedTodo.id}`, {id: selectedTodo.id, description: selectedTodo.description, status: !selectedTodo.status});

        return response;
    }

    deleteTodos(){
        const response = axios.delete(API_URL + 'delete');

        return response;
    }

    deleteCheckedTodos(todos: Todo[]){
        const response = axios.post(API_URL + 'delete-checked', todos);

        return response;
    }
}

export default new TodoSerevice();
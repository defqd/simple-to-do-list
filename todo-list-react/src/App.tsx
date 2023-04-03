import { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { Header } from './components/Header';
import TodoService from './services/todo.service';
import update from 'immutability-helper';
import './styles/index.css';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    TodoService.getAllTodos().then(
      response => {
        setTodos(response.data);
        console.log('by by by');
        console.log(response.data);
      }
    );
  }, [])

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    TodoService.toggleTodo(selectedTodo).then(
      response => {
        const todoIndex = todos.findIndex(x => x.id === selectedTodo.id);
        const newTodos = update(todos, {
          [todoIndex]: { $set: response.data }
        })
        setTodos(newTodos);
      });
  };

  const addTodo: AddTodo = (description: string) => {
    if (description === '') return;

    TodoService.addTodo(description).then(
      response => {
        setTodos([...todos, response.data]);
      });
  };

  const deleteCheckedTodos: DeleteCheckedTodos = () => {
    const checkedTodos = todos.filter(input => input.status === true);

    TodoService.deleteCheckedTodos(checkedTodos).then(res => {
      setTodos(res.data);
    });
  }

  return (
    <div className="app">
      <Header />
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteCheckedTodo={deleteCheckedTodos} />
    </div>
  );
}

export default App;
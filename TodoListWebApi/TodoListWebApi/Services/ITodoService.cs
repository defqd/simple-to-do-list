using Microsoft.AspNetCore.Mvc;
using TodoListWebApi.Models;

namespace TodoListWebApi.Services
{
    public interface ITodoService
    {
        Task<IEnumerable<Todo>> GetAllTodos();
        Task<Todo> GetTodo(int id);
        Task<Todo> AddTodo(Todo todo);
        Task<Todo> ToggleTodo(Todo todo);
        Task DeleteCheckedTodos(Todo[] todo);
    }
}
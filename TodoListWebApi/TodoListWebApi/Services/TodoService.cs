using Microsoft.EntityFrameworkCore;
using TodoListWebApi.Data.Contexts;
using TodoListWebApi.Models;

namespace TodoListWebApi.Services
{
    public class TodoService : ITodoService
    {
        private readonly TodoListContext _context;

        public TodoService(TodoListContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Todo>> GetAllTodos()
        {
            return await _context.Todo.ToListAsync();
        }

        public async Task<Todo> GetTodo(int id)
        {
            return await _context.Todo.FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<Todo> AddTodo(Todo todo)
        {
            var result = await _context.Todo.AddAsync(todo);

            await _context.SaveChangesAsync();

            return result.Entity;
        }

        public async Task DeleteCheckedTodos(Todo [] todo)
        {
            _context.RemoveRange(todo);

            await _context.SaveChangesAsync();
        }

        public async Task<Todo> MarkTodo(Todo todo)
        {
            var result = await _context.Todo.FirstOrDefaultAsync(e => e.Id == todo.Id);

            if(result != null)
            {
                result.Id = todo.Id;
                result.Description = todo.Description;
                result.Status = todo.Status;

                await _context.SaveChangesAsync();

                return result;
            }

            return null;
        }
    }
}
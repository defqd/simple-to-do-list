using Microsoft.AspNetCore.Mvc;
using TodoListWebApi.Models;
using TodoListWebApi.Services;

namespace TodoListWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;
        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet("all")]
        public async Task<ActionResult> GetAllTodos()
        {
            var result =  await _todoService.GetAllTodos();

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
            var result = await _todoService.GetTodo(id);

            if (result == null)
                return NotFound($"Todo with Id = {id} not found");

            return result;
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddTodo(Todo todo)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var createdTodo = await _todoService.AddTodo(todo);

                return CreatedAtAction(nameof(GetTodo), new { id = todo.Id }, todo);

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error creating new todo record");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Todo>> ToggleTodo(int id, Todo todo)
        {
            try
            {
                if (id != todo.Id)
                    return BadRequest("Todo ID mismatch");

                var todoToUpdate = await _todoService.GetTodo(id);

                if (todoToUpdate == null)
                    return NotFound($"Todo with Id = {id} not found");

                return await _todoService.ToggleTodo(todo);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating data");
            }
        }

        [HttpPost("delete-checked")]
        public async Task<ActionResult> DeleteCheckedTodos(Todo[] todo)
        {
            if (todo == null)
                return BadRequest();

            await _todoService.DeleteCheckedTodos(todo);

            return RedirectToAction(nameof(GetAllTodos));
        }
    }
}
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TodoListWebApi.Models;

namespace TodoListWebApi.Data.Contexts
{
    public class TodoListContext :DbContext
    {
        public DbSet<Todo> Todo { get; set; }

        public TodoListContext(DbContextOptions<TodoListContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TodoListWebApi.Models;

namespace TodoListWebApi.Data.Configurations
{
    public class TodoConfiguration : IEntityTypeConfiguration<Todo>
    {
        public void Configure(EntityTypeBuilder<Todo> builder)
        {
            builder.HasKey(e => e.Id);

            builder.ToTable("todo");

            builder.Property(e => e.Description).HasColumnName("name");

            builder.Property(e => e.Status).HasColumnName("status");
        }
    }
}
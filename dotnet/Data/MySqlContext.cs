using Microsoft.EntityFrameworkCore;
using Dpproject.Models;

namespace Dpproject.Data
{
    public class MySqlContext : DbContext
    {
        public MySqlContext(DbContextOptions<MySqlContext> options)
            : base(options)
        {
        }
        
        public DbSet<TaskCategoryModel> TaskCategories { get; set; }
        public DbSet<TaskModel> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

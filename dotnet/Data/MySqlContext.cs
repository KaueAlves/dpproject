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

        public DbSet<ExemploModel> ExemploModels { get; set; }
        public DbSet<TaskCategory> TaskCategory { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

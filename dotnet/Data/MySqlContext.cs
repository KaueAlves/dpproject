using Microsoft.EntityFrameworkCore;

namespace Dpproject.Data
{
    public class MySqlContext : DbContext
    {
        public MySqlContext(DbContextOptions<MySqlContext> options) : base(options) { }

        // Exemplo de DbSet
        public DbSet<MyEntity> MyEntities { get; set; } // Substitua MyEntity pela sua entidade
    }
}

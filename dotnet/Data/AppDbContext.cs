using Microsoft.EntityFrameworkCore;
using Models;

namespace Data.AppDbContext;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<PlayerCharacterModel> PlayerCharacterModels { get; set; }
    public DbSet<ClassModel> ClassModels { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PlayerCharacterModel>().ToTable("PlayerCharacters");
        modelBuilder.Entity<ClassModel>().ToTable("Classes");
        // Configuração da relação muitos-para-muitos
        modelBuilder.Entity<PlayerCharacterModel>()
            .HasMany(pc => pc.Classes)
            .WithMany(c => c.PlayerCharacters);
    }
}
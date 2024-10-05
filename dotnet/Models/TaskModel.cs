using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Dpproject.Models
{
    public enum TaskStatus
    {
        Active,
        Inactive,
        Depreciated
    }

    public class TaskModel
    {
        [Key]
        public int Id { get; set; }  // Chave primária

        [Required]
        [StringLength(200)]
        public required string Title { get; set; }  // Título da tarefa

        public string? Description { get; set; }  // Campo de texto que pode conter conteúdo HTML

        [Required]
        public required TaskStatus Status { get; set; }  // Status com enum

        [Range(1, int.MaxValue, ErrorMessage = "A ordem deve ser um valor positivo.")]
        public int Order { get; set; }  // Campo de ordem numérico

        [Required]
        [StringLength(200)]
        public required string Slug { get; set; }  // Slug para URLs amigáveis

        // Lista de categorias da tarefa
        public List<TaskCategoryModel> TaskCategories { get; set; }

        public TaskModel()
        {
            Status = TaskStatus.Active;  // Define o status padrão como "Ativo"
            TaskCategories = new List<TaskCategoryModel>();  // Inicializa a lista de categorias
        }
    }

}
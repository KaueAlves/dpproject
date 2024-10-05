using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dpproject.Models
{
    public enum StatusTaskCategory
    {
        Active,
        Inactive,
        Depreciated
    }

    public class TaskCategoryModel
    {
        [Key]
        public int Id { get; set; }  // Chave primária

        [Required]
        [StringLength(200)]
        public required string Title { get; set; }  // Campo de título

        [Required]
        public StatusTaskCategory Status { get; set; }  // Campo de status com enum para opções

        [Range(1, int.MaxValue, ErrorMessage = "A ordem deve ser um valor positivo.")]
        public int Order { get; set; }  // Campo de ordem numérico

        [Required]
        [StringLength(200)]
        public required string Slug { get; set; }  // Campo de slug para URLs amigáveis

        // Lista de categorias da tarefa
        public List<TaskModel> Tasks { get; set; }

        // Construtor opcional, caso queira garantir algum valor padrão
        public TaskCategoryModel()
        {
            Status = StatusTaskCategory.Active;  // Define o valor padrão como "Ativo"
            Tasks = new List<TaskModel>();
        }
    }
}



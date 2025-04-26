using System.Text.Json.Serialization;

namespace Models
{
    public class PlayerCharacterModel
    {
        public long Id { get; set; }
        public required string Name { get; set; }
        public required int Level { get; set; }

        [JsonIgnore]
        public ICollection<ClassModel>? Classes { get; set; } // Relação muitos-para-muitos
    }
}
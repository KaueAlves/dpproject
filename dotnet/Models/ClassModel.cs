namespace Models;


public class ClassModel
{
    public long Id { get; set; }
    public required string Name { get; set; }

    public ICollection<PlayerCharacterModel>? PlayerCharacters { get; set; } // Relação muitos-para-muitos
}
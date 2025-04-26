using Models;
namespace Services.PlayerCharacter
{
    public interface IPlayerCharacterService
    {
        Task<ResponseModel<List<PlayerCharacterModel>>> GetAllPlayerCharacters();
        Task<ResponseModel<PlayerCharacterModel>> GetPlayerCharacterById(int id);
        Task<ResponseModel<PlayerCharacterModel>> GetPlayerCharacterByIdClass(int idClass);
        Task<ResponseModel<PlayerCharacterModel>> CreatePlayerCharacter(PlayerCharacterModel playerCharacter);
        Task<ResponseModel<PlayerCharacterModel>> UpdatePlayerCharacter(int id, PlayerCharacterModel playerCharacter);
        Task<ResponseModel<bool>> DeletePlayerCharacter(int id);
    }
}
using Data.AppDbContext;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Services.PlayerCharacter
{

    public class PlayerCharacterService : IPlayerCharacterService
    {
        private readonly AppDbContext _context;
        public PlayerCharacterService(AppDbContext context)
        {
            _context = context;
        }
        public Task<ResponseModel<PlayerCharacterModel>> CreatePlayerCharacter(PlayerCharacterModel playerCharacter)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseModel<bool>> DeletePlayerCharacter(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseModel<List<PlayerCharacterModel>>> GetAllPlayerCharacters()
        {
            ResponseModel<List<PlayerCharacterModel>> response = new ResponseModel<List<PlayerCharacterModel>>();
            try
            {
                var playerCharacters = await _context.PlayerCharacterModels.ToListAsync();
                response.Dados = playerCharacters;
                response.Status = true;
                response.Mensagem = "Player characters retrieved successfully.";
                return response;
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Mensagem = $"An error occurred: {ex.Message}";
                return response;
            }
       ;
        }

        public Task<ResponseModel<PlayerCharacterModel>> GetPlayerCharacterById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseModel<PlayerCharacterModel>> GetPlayerCharacterByIdClass(int idClass)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseModel<PlayerCharacterModel>> UpdatePlayerCharacter(int id, PlayerCharacterModel playerCharacter)
        {
            throw new NotImplementedException();
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Services.PlayerCharacter;
using Models;

namespace dotnet.Controllers;


[ApiController]
[Route("[controller]")]

public class PlayerCharacterController : ControllerBase
{
    private readonly IPlayerCharacterService _playerCharacterService;
    public PlayerCharacterController(IPlayerCharacterService playerCharacterService)
    {
        _playerCharacterService = playerCharacterService;
    }
    /// <summary>
    /// Get all player characters   
    /// </summary>
    /// <returns>List of player characters</returns>
    /// <response code="200">Returns the list of player characters</response>
    /// <response code="400">If there is an error retrieving the player characters</response>
    /// <response code="500">If there is an internal server error</response>
    /// <remarks>
    /// Sample request:
    /// GET /PlayerCharacter/GetAllPlayerCharacters
    /// </remarks>
    [HttpGet]
    [Route("GetAllPlayerCharacters")]
    [ProducesResponseType(typeof(ResponseModel<List<PlayerCharacterModel>>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAllPlayerCharacters()
    {
        var result = await _playerCharacterService.GetAllPlayerCharacters();
        if (result.Status)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }
}

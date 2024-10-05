using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Dpproject.Data;
using Dpproject.Models;

namespace app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExemploController : ControllerBase
    {
        private readonly MySqlContext _context;

        public ExemploController(MySqlContext context)
        {
            _context = context;
        }

        // GET: api/Exemplo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExemploModel>>> GetExemploModels()
        {
            return await _context.ExemploModels.ToListAsync();
        }

        // GET: api/Exemplo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExemploModel>> GetExemploModel(int id)
        {
            var exemploModel = await _context.ExemploModels.FindAsync(id);

            if (exemploModel == null)
            {
                return NotFound();
            }

            return exemploModel;
        }

        // PUT: api/Exemplo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExemploModel(int id, ExemploModel exemploModel)
        {
            if (id != exemploModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(exemploModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExemploModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Exemplo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExemploModel>> PostExemploModel(ExemploModel exemploModel)
        {
            _context.ExemploModels.Add(exemploModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExemploModel", new { id = exemploModel.Id }, exemploModel);
        }

        // DELETE: api/Exemplo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExemploModel(int id)
        {
            var exemploModel = await _context.ExemploModels.FindAsync(id);
            if (exemploModel == null)
            {
                return NotFound();
            }

            _context.ExemploModels.Remove(exemploModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExemploModelExists(int id)
        {
            return _context.ExemploModels.Any(e => e.Id == id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Dpproject.Data;

namespace dotnet.Controllers
{
    public class MyEntityController : Controller
    {
        private readonly MySqlContext _context;

        public MyEntityController(MySqlContext context)
        {
            _context = context;
        }

        // GET: MyEntity
        public async Task<IActionResult> Index()
        {
            return View(await _context.MyEntities.ToListAsync());
        }

        // GET: MyEntity/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var myEntity = await _context.MyEntities
                .FirstOrDefaultAsync(m => m.Id == id);
            if (myEntity == null)
            {
                return NotFound();
            }

            return View(myEntity);
        }

        // GET: MyEntity/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: MyEntity/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] MyEntity myEntity)
        {
            if (ModelState.IsValid)
            {
                _context.Add(myEntity);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(myEntity);
        }

        // GET: MyEntity/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var myEntity = await _context.MyEntities.FindAsync(id);
            if (myEntity == null)
            {
                return NotFound();
            }
            return View(myEntity);
        }

        // POST: MyEntity/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] MyEntity myEntity)
        {
            if (id != myEntity.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(myEntity);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MyEntityExists(myEntity.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(myEntity);
        }

        // GET: MyEntity/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var myEntity = await _context.MyEntities
                .FirstOrDefaultAsync(m => m.Id == id);
            if (myEntity == null)
            {
                return NotFound();
            }

            return View(myEntity);
        }

        // POST: MyEntity/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var myEntity = await _context.MyEntities.FindAsync(id);
            if (myEntity != null)
            {
                _context.MyEntities.Remove(myEntity);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MyEntityExists(int id)
        {
            return _context.MyEntities.Any(e => e.Id == id);
        }
    }
}

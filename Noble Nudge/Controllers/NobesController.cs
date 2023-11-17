using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Noble_Nudge.Models;

namespace Noble_Nudge.Controllers
{
    [Route("[controller]")]

    //[Route("api/[controller]")]
    //[ApiController]
    public class NobesController : ControllerBase
    {
        //Our code
        NobleNudgeDbContext _dbContext = new NobleNudgeDbContext(); // access the database

        //api/Nobes/1
        [HttpGet("{id}")] // endpoint
        public Nobe getNobeById(int id)
        {
            return _dbContext.Nobes.Find(id);
        }
        [HttpGet("Favorites")]
        public List<Favorite> getFavorites(string googleId)
        {
            return _dbContext.Favorites.Where(u => u.UserGoogleId == googleId).ToList();
        }
        //api/Nobes/FavoritesByUser
        [HttpGet("FavoritesByUser")]
        public List<Nobe> getFavoritesByUser(string userName)

        {
            List<Favorite> faves = getFavorites(userName);
            List<Nobe> result = new List<Nobe>();
            foreach (Favorite fav in faves)
            {
                Nobe n = _dbContext.Nobes.FirstOrDefault(n => n.NobeId == fav.NobeId);
                result.Add(n);
            }
            return result;
        }
        //api/Nobes/Category?category=
        //[HttpGet("Category")]
        //public List<Nobe> getByCategory(string nobeCategory)
        //{
        //    return _dbContext.Nobes.Where(i => i.Category == nobeCategory).ToList();
        //}

        //api/Nobes
        [HttpGet]
        public List<Nobe> getAllNobes()
        {
            return _dbContext.Nobes.ToList();
        }

        //api/Nobes
        [HttpPost]
                //[HttpPost("nobes")]
        public Nobe AddNobe([FromBody] Nobe newNobe)
        {
            _dbContext.Nobes.Add(newNobe);
            _dbContext.SaveChanges();
            return newNobe;
        }

        //api/Nobes/Favorite
        [HttpPost("Favorite")]
        public Favorite addFavorite([FromBody] Favorite newFavorite)
        {
            _dbContext.Favorites.Add(newFavorite);
            _dbContext.SaveChanges();
            return newFavorite;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromForm] IFormFile file)
        {
            try
            {
                if (file == null || file.Length == 0)
                {
                    return BadRequest("No file uploaded.");
                }

                // Ensure the uploads directory exists
                string uploadsDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                if (!Directory.Exists(uploadsDirectory))
                {
                    Directory.CreateDirectory(uploadsDirectory);
                }

                // Generate a unique file name to avoid overwriting existing files
                string uniqueFileName = Guid.NewGuid().ToString() + "_" + file.FileName;
                string filePath = Path.Combine(uploadsDirectory, uniqueFileName);

                // Save the file to the server
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                // Return the file path in the response
                return Ok(new { FilePath = filePath });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
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
        public Nobe getById(int id)
        {
            return _dbContext.Nobes.Find(id);
        }
        public List<Favorite> getFavorites(string googleId)
        {
            return _dbContext.Favorites.Where(u => u.UserGoogleId == googleId).ToList();
        }
        //api/Events/FavoritesByUser
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
        [HttpGet("Category")]
        public List<Nobe> getByCategory(string nobeCategory)
        {
            return _dbContext.Nobes.Where(i => i.Category == nobeCategory).ToList();
        }

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

    }
}
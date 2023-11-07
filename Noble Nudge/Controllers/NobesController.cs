using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        // 
        [HttpGet("{id}")] // endpoint
        public Nobe GetById(int id)
        {
            return _dbContext.Nobes.Find(id);
        }

        //public User GetById(int id)
        //{
        //    return _dbContext.Users.FirstOrDefault(u => u.Id == id);
        //}

       
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
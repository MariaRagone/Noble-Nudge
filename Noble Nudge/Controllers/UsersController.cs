using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Noble_Nudge.Models;

namespace Noble_Nudge.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        //My code
        NobleNudgeDbContext _dbContext = new NobleNudgeDbContext(); // access the database

        // /api/Users/23423
        [HttpGet("{id}")] // endpoint
        public User GetById(int id)
        {
            return _dbContext.Users.Find(id);
        }

        //public User GetById(int id)
        //{
        //    return _dbContext.Users.FirstOrDefault(u => u.Id == id);
        //}

        // /api/Users/

        [HttpPost("users")]
        public User AddUser([FromBody] User u)
        {
            _dbContext.Users.Add(u);
            _dbContext.SaveChanges();
            return u;
        }
    }
}

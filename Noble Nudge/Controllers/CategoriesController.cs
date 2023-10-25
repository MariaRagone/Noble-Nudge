using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Noble_Nudge.Models;

namespace Noble_Nudge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        NobleNudgeDbContext _dbContext = new NobleNudgeDbContext(); // access the database
        [HttpGet("{id}")] // endpoint
        public NobeCategory GetById(int id)
        {
            return _dbContext.NobeCategories.Find(id);
        }


    }
}

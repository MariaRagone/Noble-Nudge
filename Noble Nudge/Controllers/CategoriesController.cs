using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Noble_Nudge.Models;

namespace Noble_Nudge.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        NobleNudgeDbContext _dbContext = new NobleNudgeDbContext(); // access the database
        [HttpGet("{id}")] // endpoint
        public NobeCategory GetById(int id)
        {
            return _dbContext.NobeCategories.Find(id);
        }

        [HttpGet]
        public List<NobeCategory> getAllCategories()
        {
            return _dbContext.NobeCategories.ToList();
        }

        [HttpGet("{category}")] // endpoint
        public NobeCategory GetByCategoryName(string category)
        {
            return _dbContext.NobeCategories.Find(category);
        }


    }
}

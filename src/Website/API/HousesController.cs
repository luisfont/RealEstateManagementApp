using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Website.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Website.API
{
    [Route("api/[controller]")]
    public class HousesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<House> Get()
        {
            return new List<House> {
                new House { Id=1, Title = "Casa 1", Description = "Descripcion 1", Bathrooms = 1.5, Comission = 4.5, Price = 850000, Rooms = 2 },
                new House { Id=2, Title = "Casa 2", Description = "Descripcion 2", Bathrooms = 2.5, Comission = 4.5, Price = 1570000, Rooms = 3 },
                new House { Id=3, Title = "Casa 3", Description = "Descripcion 3", Bathrooms = 3, Comission = 4.5, Price = 2450000, Rooms = 4 },
                new House { Id=4, Title = "Casa 4", Description = "Descripcion 4", Bathrooms = 4, Comission = 4.5, Price = 3000000, Rooms = 5 }
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public House Get(int id)
        {
            return new House { Id = 1, Bathrooms = 1.5, Comission = 4.5, Price = 850000, Rooms = 2 };
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

using Hex4s.Web.Server.WebAPI.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hex4s.Web.Server.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KingdomsController : ControllerBase
    {
        [HttpGet]
        public KingdomDto Get()
        {
            var kingdom = new KingdomDto();

            return kingdom;
        }
    }
}

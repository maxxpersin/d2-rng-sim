using Microsoft.AspNetCore.Mvc;
using server.Services.BungieService;
using server.Services.GearService;

namespace server.Controllers
{
    [ApiController]
    [Route("gear")]
    public class GearController : ControllerBase
    {
        private readonly IGearService _gearService;
        public GearController(IGearService gearService) 
        { 
            _gearService = gearService;
        
        }

        [HttpGet("{index}/perks/{perkHash}")]
        public async Task<ActionResult> GetPerks([FromRoute] long index, [FromRoute] long perkHash)
        {
            return Ok(await _gearService.GetPerks(perkHash));
        }

        [HttpGet]
        public async Task<ActionResult> GetGear([FromQuery] string itemName)
        {
            return Ok(await _gearService.GetItem(itemName));
        }
    }
}

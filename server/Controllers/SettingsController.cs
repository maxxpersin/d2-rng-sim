using Microsoft.AspNetCore.Mvc;
using server.Services.BungieService;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("settings")]
    public class SettingsController : ControllerBase
    {
        private readonly IBungieService _bungieService;
        public SettingsController(IBungieService bungieService)
        {
            _bungieService = bungieService;
        }

        [HttpGet("routecheck")]
        public async Task<ActionResult> RouteCheck()
        {
            try
            {
                return Ok(await _bungieService.RouteCheck());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

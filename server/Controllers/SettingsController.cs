﻿using Microsoft.AspNetCore.Mvc;
using server.Models;
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
        public async Task<ActionResult<List<Application>>> RouteCheck()
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

        [HttpGet("manifest")]
        public async Task<ActionResult<Dictionary<string, string>>> GetManifest()
        {
            try
            {
                return Ok(await _bungieService.GetManifest());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

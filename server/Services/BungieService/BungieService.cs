using Flurl.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using System.Collections.Generic;

namespace server.Services.BungieService
{
    public class BungieService : IBungieService
    {
        private readonly string BungieApiUrl = "https://www.bungie.net/platform";
        private readonly string API_SECRET = secrets.Secrets.API_KEY;
        private readonly ILogger<BungieService> _logger;

        public BungieService(ILogger<BungieService> logger)
        {
            _logger = logger;
        }
        public async Task<List<Application>> RouteCheck()
        {
            // This is a test to see if the API is reachable and returns a list of applications
            var request = new FlurlRequest($"{BungieApiUrl}/app/firstparty")
                .WithHeader("x-api-key", API_SECRET);

            var response = await request.GetJsonAsync<List<Application>>();

            return response;
        }

    }
}

using Flurl.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace server.Services.BungieService
{
    public class BungieService : IBungieService
    {
        private readonly ILogger<BungieService> _logger;
        private readonly HttpClient _httpClient;

        private readonly string BungieApiUrl = "https://www.bungie.net/platform";
        private readonly string API_SECRET = secrets.Secrets.API_KEY;

        public BungieService(HttpClient httpClient, ILogger<BungieService> logger)
        {
            // Id love to use flurl but the json deserializer is a nightmare
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.Add("x-api-key", API_SECRET);
            _logger = logger;
        }

        public async Task<List<Application>> RouteCheck()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"{BungieApiUrl}/app/firstparty");
            var response = await _httpClient.SendAsync(request);

            var responseBody = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<BungieApiResponse<List<Application>>>(responseBody);
            return result.Response;
        }

        public async Task<DestinyManifest> GetManifest()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"{BungieApiUrl}/destiny2/manifest");
            var response = await _httpClient.SendAsync(request);

            var responseBody = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<BungieApiResponse<DestinyManifest>>(responseBody);
            return result.Response;
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using server.Models;
using System.IO.Compression;
using System.Text.Json;

namespace server.Services.BungieService
{
    public class BungieService : IBungieService
    {
        private readonly ILogger<BungieService> _logger;
        private readonly HttpClient _httpClient;

        private readonly string BungieApiUrl = "https://www.bungie.net";
        private readonly string API_SECRET = secrets.Secrets.API_KEY;



        public BungieService(HttpClient httpClient, ILogger<BungieService> logger)
        {
            // Id love to use flurl but the json deserializer is a nightmare
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.Add("x-api-key", API_SECRET);
            _logger = logger;
        }

        #region Private Methods
        private async Task<DestinyManifest> GetManifest()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"{BungieApiUrl}/platform/destiny2/manifest");
            var response = await _httpClient.SendAsync(request);

            var responseBody = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<BungieApiResponse<DestinyManifest>>(responseBody);
            return result.Response;
        }

        private async Task<Byte[]> GetSQLiteFile(string path)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"{BungieApiUrl}{path}");
            var response = await _httpClient.SendAsync(request);

            var responseBody = await response.Content.ReadAsByteArrayAsync();
            return responseBody;
        }
        #endregion

        public async Task SetupSQLiteFromBungie()
        {
            var manifest = await GetManifest();
            var sqlLiteFile = await GetSQLiteFile(manifest.MobileWorldContentPaths["en"]);

            try
            {
                foreach (var item in Directory.GetFiles("SQLite"))
                {
                    File.Delete(item);
                }
                // Bungie wont tell you this but their db file is zipped
                using (var fs = new FileStream("SQLite/content.zip", FileMode.Create, FileAccess.ReadWrite))
                {
                    fs.Write(sqlLiteFile, 0, sqlLiteFile.Length);
                }

                // Now we must unzip
                ZipFile.ExtractToDirectory("SQLite/content.zip", "SQLite");
                File.Delete("SQLite/content.zip");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception caught in process: {0}", ex);
            }
        }

        public async Task<List<Application>> RouteCheck()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"{BungieApiUrl}/platform/app/firstparty");
            var response = await _httpClient.SendAsync(request);

            var responseBody = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<BungieApiResponse<List<Application>>>(responseBody);
            return result.Response;
        }
    }
}

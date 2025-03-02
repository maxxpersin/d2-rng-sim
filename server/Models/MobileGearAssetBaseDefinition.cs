using System.Text.Json.Serialization;

namespace server.Models
{
    public class MobileGearAssetBaseDefinition
    {
        [JsonPropertyName("version")]
        public int Version { get; set; }

        [JsonPropertyName("path")]
        public string Path { get; set; }
    }
}

using System.Text.Json.Serialization;

namespace server.Models
{
    public class ImagePyramidEntry
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("factor")]
        public float factor { get; set; }
    }
}

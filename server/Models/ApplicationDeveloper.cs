using System.Text.Json.Serialization;

namespace server.Models
{
    public class ApplicationDeveloper
    {
        [JsonPropertyName("role")]
        public int Role { get; set; }
        [JsonPropertyName("apiEulaVersion")]
        public int ApiEulaVersion { get; set; }
        [JsonPropertyName("user")]
        public UserInfoCard User { get; set; }
    }
}
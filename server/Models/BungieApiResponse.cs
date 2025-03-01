using System.Text.Json.Serialization;

namespace server.Models
{
    public class BungieApiResponse<T>
    {
        // Bungie api base response uses PascalCase, yet the internals of the response are all camelCase
        // Thank you bungie 
        [JsonPropertyName("ErrorCode")]
        public int ErrorCode { get; set; }

        [JsonPropertyName("ThrottleSeconds")]
        public int ThrottleSeconds { get; set; }

        [JsonPropertyName("ErrorStatus")]
        public string ErrorStatus { get; set; }

        [JsonPropertyName("Message")]
        public string Message { get; set; }

        [JsonPropertyName("MessageData")]
        public Dictionary<string, string> MessageData { get; set; }

        [JsonPropertyName("Response")]
        public T Response { get; set; }
    }
}
using System.Text.Json.Serialization;

namespace server.Models
{
    public class Application
    {
        [JsonPropertyName("applicationType")]
        public int ApplicationType { get; set; }

        [JsonPropertyName("applicationId")]
        public int ApplicationId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("redirectUrl")]
        public string RedirectUrl { get; set; }

        [JsonPropertyName("link")]
        public string Link { get; set; }

        [JsonPropertyName("scope")]
        public string Scope { get; set; }

        [JsonPropertyName("origin")]
        public string Origin { get; set; }

        [JsonPropertyName("status")]
        public int Status { get; set; }

        [JsonPropertyName("creationDate")]
        public DateTime CreationDate { get; set; }

        [JsonPropertyName("statusChanged")]
        public DateTime StatusChanged { get; set; }

        [JsonPropertyName("firstPublished")]
        public DateTime FirstPublished { get; set; }

        [JsonPropertyName("team")]
        public List<ApplicationDeveloper> Team { get; set; }

        [JsonPropertyName("overrideAuthorizeViewName")]
        public string OverrideAuthorizeViewName { get; set; }
    }
}
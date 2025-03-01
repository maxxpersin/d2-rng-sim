using System.Text.Json.Serialization;

namespace server.Models
{
    public class UserInfoCard
    {
        [JsonPropertyName("supplementalDisplayName")]
        public string SupplementalDisplayName { get; set; }

        [JsonPropertyName("iconPath")]
        public string IconPath { get; set; }

        [JsonPropertyName("crossSaveOverride")]
        public int CrossSaveOverride { get; set; }

        [JsonPropertyName("applicableMembershipTypes")]
        public int ApplicableMembershipTypes { get; set; }

        [JsonPropertyName("isPublic")]
        public bool IsPublic { get; set; }

        [JsonPropertyName("membershipType")]
        public int MembershipType { get; set; }

        [JsonPropertyName("bungieGlobalDisplayName")]
        public string BungieGlobalDisplayName { get; set; }

        [JsonPropertyName("bungieGlobalDisplayNameCode")]
        public int BungieGlobalDisplayNameCode { get; set; }
    }
}
namespace server.Services.GearService
{
    public interface IGearService
    {
        public Task<string> GetItem(string itemName);
        public Task<string> GetPerks(long perkHash);
    }
}

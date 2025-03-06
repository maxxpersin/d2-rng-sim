namespace server.Services.GearService
{
    public interface IGearService
    {
        public Task<string> GetItem(string itemName);
    }
}

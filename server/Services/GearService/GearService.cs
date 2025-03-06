
using Microsoft.Data.Sqlite;

namespace server.Services.GearService
{
    public class GearService : IGearService
    {
        private readonly string _connectionString;
        public GearService() {
            _connectionString = $"Data Source={Directory.GetFiles("SQLite").FirstOrDefault()}";
        }

        public Task<string> GetItem(string itemName)
        {
            try
            {
                using (var connection = new SqliteConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = "SELECT json FROM DestinyInventoryItemDefinition WHERE json LIKE @itemName";
                        command.Parameters.AddWithValue("@itemName", $"%{itemName}%");
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                return Task.FromResult(reader.GetString(0));
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return Task.FromResult<string>(null);
        }
    }
}


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
                        command.Parameters.AddWithValue("@itemName", $"%\"name\":%\"%{itemName}%\"%\"traitIds\":[\"item.weapon%");
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

        public Task<string> GetPerks(long perkHash)
        {
            try
            {
                using (var connection = new SqliteConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = "SELECT json FROM DestinySandboxPerkDefinition WHERE json LIKE @perkHash";
                        command.Parameters.AddWithValue("@perkHash", $"%\"hash\":{perkHash}%");
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

using Microsoft.Data.Sqlite;
using server.Middleware;
using server.Services.BungieService;
using server.Services.GearService;

// Initialize SQLite provider
SQLitePCL.Batteries.Init();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<IBungieService, BungieService>();
builder.Services.AddScoped<IGearService, GearService>();
builder.Services.AddHttpClient<IBungieService, BungieService>();
builder.Services.AddTransient<ExecptionMiddleware>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ExecptionMiddleware>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UsePathBase(new PathString("/api/v1"));
app.UseRouting();

app.UseStaticFiles();


var bungieService = app.Services.GetRequiredService<IBungieService>();
await bungieService.SetupSQLiteFromBungie();

var connectionString = $"Data Source={Directory.GetFiles("SQLite").FirstOrDefault()}";
using (var connection = new SqliteConnection(connectionString))
{
    // Open and close to see if it errors
    connection.Open();
    connection.Close();
}

app.Run();

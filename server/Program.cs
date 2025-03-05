using server.Middleware;
using server.Services.BungieService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<IBungieService, BungieService>();
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

app.Run();

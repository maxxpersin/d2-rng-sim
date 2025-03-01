using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Services.BungieService
{
    public interface IBungieService
    {
        public Task<List<Application>> RouteCheck();
    }
}

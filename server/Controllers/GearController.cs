using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    public class GearController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

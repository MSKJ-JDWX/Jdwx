using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JdwxWeb.Controllers
{
    public class HelpController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult HelpItem(string id)
        {
            return View();
        }
    }
}
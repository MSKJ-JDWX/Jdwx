using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JdwxWeb.Controllers
{
    public class HomeController : Controller
    {
        /*
        一、RedirectToAction("Index");//一个参数时在本Controller下，不传入参数。
        二、RedirectToAction(ActionName, ControllerName) //可以直接跳到别的Controller.
        三、RedirectToRoute(new {controller="Home",action="Index"});//可跳到其他controller
        四、RedirectToRoute(new {controller="Home",action="Index"， id=param});//可跳到其他controller,带参数。
        五、Response.Redirect("Index?id=1");//适用于本controller下的方法名称,可带参数。
        六、return Redirect("Index");//适用于本controller下的方法名称。
        七、return View("Index"); //直接显示对应的页面 不经过执行Controller的方法。 
        八、return View("~/Views/Home/Index.aspx");//这种方法是写全路径,直接显示页面,不经过Controller方法
        九、return View();//直接显示页面,不经过Controller方法
        */
        public ActionResult Index()
        {
            ViewBag.Title = "快修哥家电维修";

            return View();
        }

        public ActionResult AboutUs()
        {
            ViewBag.Title = "关于我们";
            return View("~/Views/Home/Aboutus.cshtml");
        }

        public ActionResult Login()
        {
            ViewBag.Title = "登录";
            return View("~/Views/Home/Login.cshtml");
        }

        public ActionResult Register()
        {
            ViewBag.Title = "登录";
            return View("~/Views/Home/Register.cshtml");
        }
    }
}

using System.Threading.Tasks;
using System.Web.Mvc;
using Top.Api;
using Top.Api.Request;
using Top.Api.Response;

namespace JdwxWeb.Controllers
{
    public class CouponController : Controller
    {
        // GET: Tichet
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FindCoupon()
        {
            return View("~/Views/Coupon/FindCoupon.cshtml");
        }
    }
}
using JdwxWeb.DataObjects;
using JdwxWeb.IServices;
using JdwxWeb.Services;
using System.Threading.Tasks;
using System.Web.Mvc;
using Mingshu.Framework.MSWeb.Web.WebApi;

namespace JdwxWeb.Api.Controllers
{
    public class AdvertisementController : WebApiController<AdvertisementsModel, IAdvertisementService>
    {
        [HttpGet]
        public async Task<ReturnResult<AdvertisementsModel>> GetAdvertisement(string key)
        {
            return await Service.GetAdvertisement(key);
        }
    }
}
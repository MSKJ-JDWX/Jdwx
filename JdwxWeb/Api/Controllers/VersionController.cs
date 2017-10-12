using JdwxWeb.DataObjects;
using JdwxWeb.IServices;
using System.Web.Mvc;
using Mingshu.Framework.MSWeb.Web.WebApi;

namespace JdwxWeb.Api.Controllers
{
    public class VersionController : WebApiController<UsersModel, ICommonService>
    {
        [HttpGet]
        public ReturnResult<VersionInfo> GetVersionInfo()
        {
            return Service.GetVersionInfo();
        }
    }
}
using JdwxWeb.DataObjects;
using JdwxWeb.IServices;
using System.Threading.Tasks;
using System.Web.Mvc;
using Mingshu.Framework.MSWeb.Core.Paging;
using Mingshu.Framework.MSWeb.Web.WebApi;

namespace JdwxWeb.Api.Controllers
{
    public class UsersController : WebApiController<UsersModel, IUsersService>
    {
        [HttpPost]
        public async Task<ReturnResult<UsersModel>> RegisterUserInfo(ValidateUserApiModel model)
        {
            return await Service.RegisterUserInfo(model.strCode, model.password);
        }

        [HttpPost]
        public async Task<ReturnResult<bool>> ChangePassword(ChangeUserApiModel model)
        {
            return await Service.ChangePassword(model.id, model.oldPassword, model.newPassword);
        }

        [HttpGet]
        public async Task<ReturnResult<PagedData<UsersModel>>> GetUserInfos(int curPage, int pageSize, int type, string filter)
        {
            return await Service.GetUserInfos(curPage, pageSize, type,filter);
        }

        [HttpPost]
        public async Task<ReturnResult<bool>> SaveUserInfo(UserApiModel userInfo)
        {
            return await Service.SaveUserInfo(userInfo.userInfo);
        }
        
        [HttpPost]
        public async Task<ReturnResult<UsersModel>> ValidateUserInfo(ValidateUserApiModel model)
        {
            return await Service.ValidateUserInfo(model.strCode, model.password);
        }
    }

    public class UserApiModel
    {
        public UsersModel userInfo { get; set; }
    }
    public class ValidateUserApiModel
    {
        public string strCode { get; set; }
        public string password { get; set; }
    }
    public class ChangeUserApiModel
    {
        public string id { get; set; }
        public string oldPassword { get; set; }
        public string newPassword { get; set; }
    }
}
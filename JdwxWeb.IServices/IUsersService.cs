using System.Threading.Tasks;

using JdwxWeb.DataObjects;

using Mingshu.Framework.MSWeb.Services;
using Mingshu.Framework.MSWeb.Services.ServiceContract;
using JdwxWeb.Domains;
using Mingshu.Framework.MSWeb.Core.Paging;

namespace JdwxWeb.IServices
{
    public interface IUsersService : IBaseServiceKeyedString<UsersModel>, IServiceContract
    {
        /// <summary>
        /// 验证用户登录信息，登录名支持用户名、邮箱、手机号。
        /// </summary>
        /// <param name="strCode">用户名、邮箱或手机号</param>
        /// <param name="password">用户密码(暂未加密)</param>
        /// <returns></returns>
        Task<ReturnResult<UsersModel>> ValidateUserInfo(string strCode, string password);
        /// <summary>
        /// 注册用户
        /// </summary>
        /// <param name="strCode">用户名</param>
        /// <param name="password">用户密码(暂未加密)</param>
        /// <returns></returns>
        Task<ReturnResult<UsersModel>> RegisterUserInfo(string strCode, string password);
        /// <summary>
        /// 获取用户信息
        /// </summary>
        /// <param name="curPage">当前页</param>
        /// <param name="pageSize">每页个数</param>
        /// <param name="type">用户类型 0-普通用户、游客 1-VIP用户 2-SVIP用户 
        /// 3-特约用户（可发布商品） 4-管理员 5-超级管理员 9-全部</param>
        /// <param name="filter">查询条件</param>
        /// <returns></returns>
        Task<ReturnResult<PagedData<UsersModel>>> GetUserInfos(int curPage, int pageSize, int type, string filter);
        /// <summary>
        /// 更新用户信息
        /// </summary>
        /// <param name="userInfo">待更新用户信息</param>
        /// <returns></returns>
        Task<ReturnResult<bool>> SaveUserInfo(UsersModel userInfo);
        /// <summary>
        /// 用户修改密码
        /// </summary>
        /// <param name="id">用户主键</param>
        /// <param name="oldPassword">旧密码</param>
        /// <param name="newPassword">新密码</param>
        /// <returns></returns>
        Task<ReturnResult<bool>> ChangePassword(string id, string oldPassword, string newPassword);
    }
}

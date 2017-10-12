using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using JdwxWeb.DataObjects;
using JdwxWeb.Domains;
using JdwxWeb.IServices;
using Mingshu.Framework.MSWeb.EFRepository;
using Mingshu.Framework.MSWeb.Services;
using JdwxWeb.Core.Utils;
using Mingshu.Framework.MSWeb.Core.Paging;
using System.Data.SqlClient;
using Mingshu.Framework.MSWeb.Core.AspectX;
using System.Linq.Expressions;

namespace JdwxWeb.Services
{
    public class UsersService : BaseServiceKeyedString<UsersModel, Users>, IUsersService
    {
        #region 私有变量
        private string timeStyle = "yyyyMMddHHmmss";
        #endregion

        #region 接口方法

        public UsersService(IRepositoryContext context, IRepository<Users> repository) : base(context, repository)
        {
        }

        public async Task<ReturnResult<bool>> ChangePassword(string id, string oldPassword, string newPassword)
        {
            return await Aspect.Task(async () =>
            {
                ReturnResult<bool> result = new ReturnResult<bool>();
                Expression<Func<Users, bool>> exp = x => x.ID == id;
                var user = await this.FindOneAsync<UsersModel, Users>(repository, exp);
                oldPassword = EncryptUtil.EncryptDES(oldPassword, (user.registertime ?? DateTime.Now)
                       .ToString(timeStyle));
                if(user.password == oldPassword)
                {
                    result.data = await this.Update<Users>(repository, id, 
                        x => x.password = EncryptUtil.EncryptDES(newPassword,
                        (user.registertime ?? DateTime.Now).ToString(timeStyle)));
                    if (result.data)
                    {
                        result.code = 1;
                    }
                    else
                    {
                        result.code = -103;
                        result.message = "用户密码更新失败！";
                    }
                    return result;
                }
                else
                {
                    result.code = -102;
                    result.message = "用户原密码错误！";
                    return result;
                }
                
            })
            .WithLog("修改密码.")
            .Execute();
        }

        public async Task<ReturnResult<PagedData<UsersModel>>> GetUserInfos(int curPage, int pageSize, int type, string filter)
        {
            return await Aspect.Task(async () =>
            {
                ReturnResult<PagedData<UsersModel>> result = new ReturnResult<PagedData<UsersModel>>();
                Expression<Func<Users, bool>> exp = x => (x.usertype == type || (type == 9 && x.usertype != 5)) 
                    && (string.IsNullOrEmpty(filter) || x.userid.Contains(filter));
                var users = await this.FindResultWithPagingAsync<UsersModel, Users>(repository,curPage,pageSize, exp,
                    x => new { x.registertime},SortOrder.Descending);
                if (users == null || users.DataList == null || users.DataList.Count == 0)
                {
                    result.code = -104;
                    result.message = "未查询到数据。";
                    return result;
                }
                result.code = 1;
                result.data = users;
                return result;
            })
            .WithLog("获取用户信息.")
            .Execute();
        }

        public async Task<ReturnResult<UsersModel>> RegisterUserInfo(string strCode, string password)
        {
            return await Aspect.Task(async () =>
            {
                ReturnResult<UsersModel> result = new ReturnResult<UsersModel>();
                Expression<Func<Users, bool>> exp = x => x.userid == strCode;
                var user = await this.FindOneAsync<UsersModel, Users>(repository, exp);
                if(user != null && !string.IsNullOrEmpty(user.ID))
                {
                    result.code = -105;
                    result.message = "无法注册，用户名已存在！";
                    return result;
                }
                else
                {
                    DateTime now = DateTime.Now;
                    //新增用户
                    UsersModel tempUser = new UsersModel
                    {
                        ID = Guid.NewGuid().ToString(),
                        userid = strCode,
                        nickname = strCode,
                        password = EncryptUtil.EncryptDES(password, now.ToString(timeStyle)),
                        usertype = 0,
                        registertime = now,
                    };

                    bool isRegistSuccess = await this.Add(tempUser);
                    if (isRegistSuccess)
                    {
                        result.code = 1;
                        result.data = tempUser;
                    }
                    else
                    {
                        result.code = -106;
                        result.message = "新增用户失败！";
                    }
                    return result;
                }
            })
           .WithLog("注册用户信息.")
           .Execute();
        }

        public async Task<ReturnResult<bool>> SaveUserInfo(UsersModel userInfo)
        {
            return await Aspect.Task(async () =>
            {
                ReturnResult<bool> result = new ReturnResult<bool>();
                result.data = await this.Update(userInfo);
                if (result.data)
                {
                    result.code = 1;
                }
                else
                {
                    result.code = -103;
                    result.message = "用户信息更新失败！";
                }
                return result;
            })
           .WithLog("更新用户信息.")
           .Execute();
        }

        public async Task<ReturnResult<UsersModel>> ValidateUserInfo(string strCode, string password)
        {
            //验证用户名
            return await Aspect.Task(async () =>
            {
                ReturnResult<UsersModel> result = new ReturnResult<UsersModel>();


                Expression<Func<Users, bool>> exp = x => x.userid == strCode;

                var user = await this.FindOneAsync<UsersModel, Users>(repository, exp);

                if (user == null)
                {
                    result.code = -101;
                    result.message = "您输入的用户名不存在！";
                    return result;
                }
                else
                {
                    if (EncryptUtil.EncryptDES(password, (user.registertime ?? DateTime.Now)
                            .ToString(timeStyle)) != user.password)
                    {
                        result.code = -102;
                        result.message = "您输入的密码错误！";
                        return result;
                    }
                    else
                    {
                        result.code = 1;
                        result.data = user;
                        return result;

                    }
                }
            })
            .WithLog("登录信息.")
            .Execute();
        }

        #endregion

        #region 私有方法

        #endregion

    }
}

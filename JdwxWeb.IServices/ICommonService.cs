using JdwxWeb.DataObjects;
using Mingshu.Framework.MSWeb.Services;
using Mingshu.Framework.MSWeb.Services.ServiceContract;

namespace JdwxWeb.IServices
{
    public interface ICommonService: IBaseServiceKeyedString<UsersModel>, IServiceContract
    {
        ReturnResult<VersionInfo> GetVersionInfo();
    }
}

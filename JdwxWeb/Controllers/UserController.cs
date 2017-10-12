using System.Threading.Tasks;
using System.Web.Http;

using JdwxWeb.DataObjects;
using JdwxWeb.IServices;

using Mingshu.Framework.MSWeb.Web.WebApi;

namespace JdwxWeb.Controllers
{
    public class UserController : WebApiController<UsersModel, IUsersService>
    {
    }
}

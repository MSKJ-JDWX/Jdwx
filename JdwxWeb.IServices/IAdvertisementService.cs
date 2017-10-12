using JdwxWeb.DataObjects;
using System.Threading.Tasks;
using Mingshu.Framework.MSWeb.Services;
using Mingshu.Framework.MSWeb.Services.ServiceContract;

namespace JdwxWeb.IServices
{
    public interface IAdvertisementService : IBaseServiceKeyedString<AdvertisementsModel>, IServiceContract
    {
        Task<ReturnResult<AdvertisementsModel>> GetAdvertisement(string key);
    }
}

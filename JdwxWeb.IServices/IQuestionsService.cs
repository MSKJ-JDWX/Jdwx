using JdwxWeb.DataObjects;
using System.Threading.Tasks;
using Mingshu.Framework.MSWeb.Services;
using Mingshu.Framework.MSWeb.Services.ServiceContract;

namespace JdwxWeb.IServices
{
    public interface IQuestionsService : IBaseServiceKeyedString<QuestionsModel>, IServiceContract
    {
        /// <summary>
        /// 保存用户反馈信息
        /// </summary>
        /// <param name="userInfo">用户反馈信息</param>
        /// <returns></returns>
        Task<ReturnResult<bool>> AddQuestion(QuestionsModel questionInfo);
    }
}

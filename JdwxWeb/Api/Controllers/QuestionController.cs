using JdwxWeb.DataObjects;
using JdwxWeb.IServices;
using System.Threading.Tasks;
using System.Web.Mvc;
using Mingshu.Framework.MSWeb.Web.WebApi;

namespace JdwxWeb.Api.Controllers
{
    public class QuestionController : WebApiController<QuestionsModel, IQuestionsService>
    {
        [HttpPost]
        public async Task<ReturnResult<bool>> AddQuestion(QuestionsModel questionInfo)
        {
            return await Service.AddQuestion(questionInfo);
        }
    }
}
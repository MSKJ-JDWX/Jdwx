using JdwxWeb.DataObjects;
using JdwxWeb.Domains;
using JdwxWeb.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mingshu.Framework.MSWeb.Core.AspectX;
using Mingshu.Framework.MSWeb.Services;
using Mingshu.Framework.MSWeb.EFRepository;

namespace JdwxWeb.Services
{
    public class QuestionsService : BaseServiceKeyedString<QuestionsModel, Questions>, IQuestionsService
    {
        public QuestionsService(IRepositoryContext context, IRepository<Questions> repository) : base(context, repository)
        {
        }

        public async Task<ReturnResult<bool>> AddQuestion(QuestionsModel questionInfo)
        {
            return await Aspect.Task(async () =>
            {
                ReturnResult<bool> result = new ReturnResult<bool>();
                questionInfo.ID = Guid.NewGuid().ToString();
                result.data = await this.Add(questionInfo);
                if (result.data)
                {
                    result.code = 1;
                }
                else
                {
                    result.code = -106;
                    result.message = "用户反馈新增失败！";
                }
                return result;
            })
           .WithLog("新增用户反馈.")
           .Execute();
        }
    }
}

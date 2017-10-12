using System;
using Mingshu.Framework.MSWeb.Core.BaseDataObject;

namespace JdwxWeb.DataObjects
{
    public partial class QuestionsModel : Model<string>
    {

        public string feedbackuserid { get; set; }

        public string feedbackusernickname { get; set; }

        public DateTime? feedbacktime { get; set; }

        public string contact { get; set; }

        public string content { get; set; }
    }
}

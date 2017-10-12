using System;
using Mingshu.Framework.MSWeb.Core.BaseDomain;

namespace JdwxWeb.Domains
{
    public partial class Questions : EntityKeyedString
    {

        public string feedbackuserid { get; set; }

        public string feedbackusernickname { get; set; }

        public DateTime? feedbacktime { get; set; }

        public string contact { get; set; }

        public string content { get; set; }
    }
}

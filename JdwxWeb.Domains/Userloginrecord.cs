using System;
using Mingshu.Framework.MSWeb.Core.BaseDomain;

namespace JdwxWeb.Domains
{

    public partial class Userloginrecord : EntityKeyedString
    {

        public string userid { get; set; }

        public DateTime? logintime { get; set; }

        public string loginaddress { get; set; }
    }
}

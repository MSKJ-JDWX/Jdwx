using System;
using Mingshu.Framework.MSWeb.Core.BaseDomain;

namespace JdwxWeb.Domains
{

    public partial class Advertisements : EntityKeyedString
    {

        public string key { get; set; }

        public short? type { get; set; }

        public string img { get; set; }

        public string content { get; set; }

        public string goodskey { get; set; }

        public DateTime? begintime { get; set; }

        public DateTime? endtime { get; set; }

        public int? state { get; set; }
    }
}

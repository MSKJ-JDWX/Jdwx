using System;
using System.Collections.Generic;
using Mingshu.Framework.MSWeb.Core.BaseDataObject;

namespace JdwxWeb.DataObjects
{
    public class GoodsModel: Model<string>
    {

        public string description { get; set; }

        public string reason { get; set; }

        public string link { get; set; }

        public string command { get; set; }

        public string oldprice { get; set; }
        public string price { get; set; }

        public DateTime? expirydate { get; set; }

        public bool? isbuy { get; set; }

        public short? state { get; set; }

        public bool? recommendflag { get; set; }

        public string recommender { get; set; }

        public string recommendname { get; set; }

        public DateTime? recommendtime { get; set; }

        public string auditopinion { get; set; }

        public DateTime? audittime { get; set; }

        public string audituser { get; set; }

        public string auditname { get; set; }

        public long? dealcount { get; set; }

        public long? clickcount { get; set; }

        public string image { get; set; }

        public string buyimage { get; set; }
    }
}

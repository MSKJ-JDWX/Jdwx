using System;
using Mingshu.Framework.MSWeb.Core.BaseDataObject;

namespace JdwxWeb.DataObjects
{
    public class UsersModel : Model<string>
    {
        public string UserCode { get; set; }

        public string PassWord { get; set; }

        public string Nickname { get; set; }

        public string IdCard { get; set; }

        public string RealName { get; set; }

        public DateTime? Birth { get; set; }

        public string PhoneNumber { get; set; }

        public string Avatar { get; set; }

        public short? Usertype { get; set; }

        public short? Userlevel { get; set; }

        public string UserSignature { get; set; }

        public string Wechat { get; set; }

        public string QQ { get; set; }

        public string Sina { get; set; }

        public string Taobao { get; set; }

        public DateTime? RegisterTime { get; set; }

        public string Address { get; set; }

        public bool Agreement { get; set; }

        public DateTime? LastLoginTime { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using JdwxWeb.DataObjects;
using JdwxWeb.Domains;

using Mingshu.Framework.MSWeb.Services.Mapper;

namespace JdwxWeb.Services.Mapper
{
    public class DtoMapper : BaseMapperConfiguration
    {
        public override void InitBind()
        {
            this.BindByBaseType();
        }
    }
}

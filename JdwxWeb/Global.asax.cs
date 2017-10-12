using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

using Mingshu.Framework.MSWeb.Core.Infrastructure.Engine;
using Mingshu.Framework.MSWeb.Core.TypeFinder;
using Mingshu.Framework.MSWeb.DataAccess;

namespace JdwxWeb
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            //var a = new DDD("",null,null);

            EngineContext.Initialize();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }

    class DDD : DbContext
    {
        public DDD(string name, string connstr, ITypeFinder finder) : base(name, connstr, finder)
        {
        }
    }
}

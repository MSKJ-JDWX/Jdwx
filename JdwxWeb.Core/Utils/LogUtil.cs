using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace JdwxWeb.Core.Utils
{
    public static class LogUtil
    {
        #region Private Fields
        private static readonly log4net.ILog webLog = log4net.LogManager.GetLogger("WebLog.Logger");
        #endregion

        #region WebLog
        public static void WebLog(object obj)
        {
            if (null == obj)
                return;

            webLog.Info(obj);
        }

        /// <summary>
        /// 将异常信息写入日志
        /// </summary>
        /// <param name="ex">异常信息</param>
        public static void WebError(Exception ex)
        {
            if (null == ex)
                return;

            webLog.Error(ex.Message, ex);
        }

        /// <summary>
        /// 将异常信息写入日志
        /// </summary>
        /// <param name="ex">异常信息</param>
        /// <param name="flag">日志标签</param>
        public static void WebError(Exception ex,string logFlag)
        {
            if (null == ex)
                return;

            webLog.Error(logFlag + ex.Message, ex);
        }
        #endregion

    }
}

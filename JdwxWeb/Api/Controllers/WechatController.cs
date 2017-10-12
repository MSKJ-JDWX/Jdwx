using JdwxWeb.Core.Utils;
using JdwxWeb.DataObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace JdwxWeb.Api.Controllers
{
    public class WechatController : System.Web.Http.ApiController
    {
        private readonly string sToken = "mskj2017";//与微信公众账号后台的Token设置保持一致，区分大小写。
        private readonly string sAppID = "wx231cad5b531e5d35";
        private readonly string sEncodingAESKey = "5gMwyIaHqwbJwGgoiwpu88ltq87M1wi1eNbTm9btnAJ";
        [HttpGet]
        public HttpResponseMessage Get(string signature, string timestamp, string nonce, string echostr)
        {
            string[] ArrTmp = { sToken, timestamp, nonce };
            Array.Sort(ArrTmp);
            string tmpStr = string.Join("", ArrTmp);
            var result = FormsAuthentication.HashPasswordForStoringInConfigFile(tmpStr, "SHA1").ToLower();

            if (signature.Equals(result))
            {
                return new HttpResponseMessage()
                {
                    Content = new StringContent(echostr, Encoding.GetEncoding("UTF-8"), "application/x-www-form-urlencoded")
                };
            }
            else
            {
                return new HttpResponseMessage()
                {
                    Content = new StringContent("Error!", Encoding.GetEncoding("UTF-8"), "application/x-www-form-urlencoded")
                };
            }
        }

        //获取access_token:https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx231cad5b531e5d35&secret=d630dbef26551beabce53477b37dfcfb
        private string access_token = "vAM8PhhZh1dgKCnSBtBgL8VVza2eUcaVP6wEnFlbpP5VnlPoukJpJ-D-RY0D-vZSVwIiF652agEefGuiTEGRDD9eZ2W3pE7Y0I5QWgT3W1aVq1rVQ1Xp0ULrYk3tK3BdNNIfAAACCX";

        [HttpPost]
        public HttpResponseMessage ResponseMsg(string Token,string weixin)
        {


            return new HttpResponseMessage()
            {
                Content = new StringContent("测试成功了", Encoding.GetEncoding("UTF-8"), "application/x-www-form-urlencoded")
            };
        }

    }

    public class strApiModel
    {
        public string weixin;
    }
}
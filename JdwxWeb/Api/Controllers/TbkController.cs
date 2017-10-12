using JdwxWeb.DataObjects;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using Top.Api;
using Top.Api.Request;
using Top.Api.Response;
using System.Web.Mvc;
using System.Threading.Tasks;

namespace JdwxWeb.Controllers
{
    public class TbkController : System.Web.Http.ApiController
    {

        private string appkey = "24621990";
        public string appsecret = "67324d6b627d04bc32b68a25eabcd3d5";
        /// <summary>
        /// 获取淘宝客粉丝优惠券列表
        /// </summary>
        /// <param name="pageNo">当前页</param>
        /// <param name="pageSize">每页数量</param>
        /// <param name="q">查询条件</param>
        /// <returns></returns>
        [HttpGet]
        public ReturnResult<List<CouponInfo>> GetCouponList(long pageNo, long pageSize, string q)
        {
            ReturnResult<List<CouponInfo>> result = new ReturnResult<List<CouponInfo>>();
            List<CouponInfo> data = new List<CouponInfo>();
            if (pageNo == null) { pageNo = 1; }
            if (pageSize == null) { pageSize = 24; }

            string url = "http://gw.api.taobao.com/router/rest";
            string format = "json";
            ITopClient client = new DefaultTopClient(url, appkey, appsecret, format);
            TbkDgItemCouponGetRequest req = new TbkDgItemCouponGetRequest();
            req.AdzoneId = 132798493L;
            req.Q = q;
            req.PageNo = pageNo;
            req.PageSize = pageSize;
            req.Platform = 2;
            TbkDgItemCouponGetResponse response = client.Execute(req);

            JObject jsonObj = JObject.Parse(response.Body);
            string coupons;
            try
            {
                coupons = jsonObj["tbk_dg_item_coupon_get_response"]["results"]["tbk_coupon"].ToString();
            }
            catch
            {
                result.code = -116;
                result.message = "没有相关粉丝福利券！";
                return result;
            }

            JArray jar = JArray.Parse(coupons);
            foreach (var temp in jar)
            {
                data.Add(
                    new CouponInfo
                    {
                        category = temp["category"].ToString(),
                        commission_rate = temp["commission_rate"].ToString(),
                        coupon_click_url = temp["coupon_click_url"].ToString(),
                        coupon_end_time = temp["coupon_end_time"].ToString(),
                        coupon_info = temp["coupon_info"].ToString(),
                        coupon_remain_count = temp["coupon_remain_count"].ToString(),
                        coupon_start_time = temp["coupon_start_time"].ToString(),
                        coupon_total_count = temp["coupon_total_count"].ToString(),
                        item_description = temp["item_description"].ToString(),
                        item_url = temp["item_url"].ToString(),
                        nick = temp["nick"].ToString(),
                        num_iid = temp["num_iid"].ToString(),
                        pict_url = temp["pict_url"].ToString(),
                        seller_id = temp["seller_id"].ToString(),
                        shop_title = temp["shop_title"].ToString(),
                        title = temp["title"].ToString(),
                        user_type = temp["user_type"].ToString(),
                        volume = temp["volume"].ToString(),
                        zk_final_price = temp["zk_final_price"].ToString(),
                    }
                    );
            }

            result.code = 1;
            result.data = data;

            return result;
        }

        /// <summary>
        /// 创建淘口令
        /// </summary>
        /// <param name="text">界面显示文字</param>
        /// <param name="url">需要转换的URL</param>
        /// <param name="logo">界面显示的图片</param>
        /// <returns></returns>
        [HttpGet]
        public ReturnResult<string> CreateTpwd(string text, string url, string logo)
        {
            ReturnResult<string> result = new ReturnResult<string>();

            string urlVisit = "http://gw.api.taobao.com/router/rest";
            string format = "json";
            ITopClient client = new DefaultTopClient(urlVisit, appkey, appsecret, format);
            TbkTpwdCreateRequest req = new TbkTpwdCreateRequest();
            req.Logo = logo;
            req.Text = "【闪荐福利券】" + text;
            req.Url = url;
            req.UserId = "28771534";
            TbkTpwdCreateResponse response = client.Execute(req);

            if (response == null)
            {
                result.code = -118;
                result.message = "淘宝口令生成失败";
            }
            else
            {
                result.code = 1;
                result.message = response.Body;
                return result;
            }
            return result;
        }

        [HttpGet]
        public async Task<object> GetGoods(string q, long? pageNo, long? pageSize)
        {
            if (string.IsNullOrEmpty(q))
            {
                q = "母婴";
            }
            string url = "http://gw.api.taobao.com/router/rest";
            string format = "json";
            ITopClient client = new DefaultTopClient(url, appkey, appsecret, format);
            TbkItemGetRequest req = new TbkItemGetRequest();
            req.Fields = "num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick";
            req.Q = q;
            req.IsTmall = true;//是否商城商品，设置为true表示该商品是属于淘宝商城商品，设置为false或不设置表示不判断这个属性
            //req.Cat = "16,18";
            req.PageNo = pageNo ?? 1;
            req.PageSize = pageSize ?? 40;
            //req.StartTkRate = 1000;//淘客佣金比率上限，如：1234表示12.34%
            req.EndTkRate = 1000;//淘客佣金比率下限，如：1234表示12.34%
            //req.StartPrice = 10;//折扣价范围下限，单位：元
            //req.EndPrice = 10;//折扣价范围上限，单位：元
            TbkItemGetResponse response = client.Execute(req);

            return response.Body;
        }

        [HttpGet]
        public async Task<object> GetCoupons(string q, long? pageNo, long? pageSize)
        {
            string url = "http://gw.api.taobao.com/router/rest";
            string format = "json";
            ITopClient client = new DefaultTopClient(url, appkey, appsecret, format);
            TbkDgItemCouponGetRequest req = new TbkDgItemCouponGetRequest();
            req.AdzoneId = 132554802L;
            req.Q = q;
            req.PageNo = pageNo ?? 1;
            req.PageSize = pageSize ?? 24;
            TbkDgItemCouponGetResponse response = client.Execute(req);

            return response.Body;
        }
    }
}
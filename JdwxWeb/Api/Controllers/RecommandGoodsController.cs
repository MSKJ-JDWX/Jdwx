using JdwxWeb.DataObjects;
using JdwxWeb.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Top.Api;
using Top.Api.Request;
using Top.Api.Response;
using Mingshu.Framework.MSWeb.Core.Paging;
using Mingshu.Framework.MSWeb.Web.WebApi;

namespace JdwxWeb.Api.Controllers
{
    public class RecommandGoodsController : WebApiController<GoodsModel, IGoodsService>
    {
        [HttpGet]
        public String GetGoods(string q , long? pageNo,long? pageSize)
        {
            if (string.IsNullOrEmpty(q))
            {
                q = "母婴";
            }
            string url = "http://gw.api.taobao.com/router/rest";
            string appkey = "24620377";
            string appsecret = "f1169988a1703d26729664cf86b4b2ea";
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
        public async Task<ReturnResult<PagedData<GoodsModel>>> GetRecommandGoodsList(int curPage, int pageSize, int type, string filter)
        {
            return await Service.GetRecommandGoodsList(curPage, pageSize, type, filter);
        }
        [HttpGet]
        public Task<ReturnResult<bool>> ClickCounIncrement(string id)
        {
            return Service.ClickCounIncrement(id);
        }
        [HttpPost]
        public async Task<ReturnResult<bool>> SaveGoodsInfo(GoodsApiModel goodsInfo)
        {
            return await Service.SaveGoodsInfo(goodsInfo.goodsInfo);
        }
        [HttpPost]
        public async Task<ReturnResult<bool>> AuditGoodsInfo(GoodsApiModel goodsInfo)
        {
            return await Service.AuditGoodsInfo(goodsInfo.goodsInfo);
        }

    }

    public class GoodsApiModel
    {
        public GoodsModel goodsInfo { get; set; }
    }
}
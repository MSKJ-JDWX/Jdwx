using System.Collections.Generic;
using Mingshu.Framework.MSWeb.Core.BaseDataObject;

namespace JdwxWeb.DataObjects
{
    /// <summary>
    /// 购物券类
    /// </summary>
    public class CouponInfo:Model<string>
    {
        /// <summary>
        /// 后台一级类目
        /// </summary>
        public string category { get; set; }
        /// <summary>
        /// 佣金比率(%)
        /// </summary>
        public string commission_rate { get; set; }
        /// <summary>
        /// 商品优惠券推广链接
        /// </summary>
        public string coupon_click_url { get; set; }
        /// <summary>
        /// 优惠券结束时间
        /// </summary>
        public string coupon_end_time { get; set; }
        /// <summary>
        /// 优惠券面额
        /// </summary>
        public string coupon_info { get; set; }
        /// <summary>
        /// 优惠券剩余量
        /// </summary>
        public string coupon_remain_count { get; set; }
        /// <summary>
        /// 优惠券开始时间
        /// </summary>
        public string coupon_start_time { get; set; }
        /// <summary>
        /// 优惠券总量
        /// </summary>
        public string coupon_total_count { get; set; }
        /// <summary>
        /// 推荐理由
        /// </summary>
        public string item_description { get; set; }
        /// <summary>
        /// 商品详情页链接地址
        /// </summary>
        public string item_url { get; set; }
        /// <summary>
        /// 卖家昵称
        /// </summary>
        public string nick { get; set; }
        /// <summary>
        /// itemId
        /// </summary>
        public string num_iid { get; set; }
        /// <summary>
        /// 商品主图
        /// </summary>
        public string pict_url { get; set; }
        /// <summary>
        /// 卖家id
        /// </summary>
        public string seller_id { get; set; }
        /// <summary>
        /// 店铺名称
        /// </summary>
        public string shop_title { get; set; }
        /// <summary>
        /// 商品标题
        /// </summary>
        public string title { get; set; }
        /// <summary>
        /// 卖家类型，0表示集市，1表示商城
        /// </summary>
        public string user_type { get; set; }
        /// <summary>
        /// 30天销量
        /// </summary>
        public string volume { get; set; }
        /// <summary>
        /// 折扣价
        /// </summary>
        public string zk_final_price { get; set; }
        /// <summary>
        /// 商品小图列表
        /// </summary>
        public List<string> small_images { get; set; }
    }
}

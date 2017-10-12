using Mingshu.Framework.MSWeb.Core.BaseDataObject;

namespace JdwxWeb.DataObjects
{
    /// <summary>
    /// 广告信息
    /// </summary>
    public class AdInfo: Model<string>
    {
        //广告信息
        public AdvertisementsModel adInfo { get; set; }
        //商品类广告对应的商品信息
        public GoodsModel goodsInfo { get; set; }
    }
}

using System.Runtime.Serialization;

namespace JdwxWeb.DataObjects
{
    [DataContract]
    public class ReturnResult<T>
    {
        //IsSuccess: false, Message: "实体类型 Users 不是当前上下文的模型的一部分。", StatusCode: 500
        /// <summary>
        /// 返回编码
        /// </summary>
        [DataMember(Order = 0)]
        public int code { get; set; }
        /// <summary>
        /// 返回数据
        /// </summary>
        [DataMember(Order = 1)]
        public T data { get; set; }
        /// <summary>
        /// 返回消息
        /// </summary>
        [DataMember(Order = 2)]
        public string message { get; set; }
    }
}

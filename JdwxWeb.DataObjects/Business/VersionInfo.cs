using System.Runtime.Serialization;
using Mingshu.Framework.MSWeb.Core.BaseDataObject;

namespace JdwxWeb.DataObjects
{
    [DataContract]
    public class VersionInfo: Model<string>
    {
        /// <summary>
        /// 版本号
        /// </summary>
        [DataMember]
        public int versionNumber { get; set; }
        /// <summary>
        /// 版本编号
        /// </summary>
        [DataMember]
        public string version { get; set; }
        /// <summary>
        /// 下载地址
        /// </summary>
        [DataMember]
        public string downloadAddress { get; set; }
        /// <summary>
        /// 更新内容
        /// </summary>
        [DataMember]
        public string updateContent { get; set; }
    }
}

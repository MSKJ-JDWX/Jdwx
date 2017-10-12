using JdwxWeb.IServices;
using System;
using JdwxWeb.DataObjects;
using System.Configuration;
using System.IO;
using JdwxWeb.Core.Utils;
using Mingshu.Framework.MSWeb.Services;
using JdwxWeb.Domains;
using Mingshu.Framework.MSWeb.EFRepository;

namespace JdwxWeb.Services
{
    public class CommonService : BaseServiceKeyedString<UsersModel, Users>, ICommonService
    {
        public CommonService(IRepositoryContext context, IRepository<Users> repository) : base(context, repository)
        {
        }

        public ReturnResult<VersionInfo> GetVersionInfo()
        {
            ReturnResult<VersionInfo> result = new ReturnResult<VersionInfo>();
            VersionInfo version = new VersionInfo();
            version.versionNumber = 0;
            try
            {
                //获取txt文件中的版本号和更新内容
                string[] lines = File.ReadAllLines(GetVersionFilePath());
                bool isVersionNumber = false;
                bool isVersion = false;
                bool isUpdateContent = false;
                foreach (string line in lines)
                {
                    if (isVersionNumber)
                    {
                        try
                        {
                            version.versionNumber = Convert.ToInt32(line);
                        }
                        catch { }//转错不处理

                        isVersionNumber = false;
                    }
                    else if (isVersion)
                    {
                        version.version = line;
                        isVersion = false;
                    }
                    else if (isUpdateContent)
                    {
                        version.updateContent += line + "\r\n";
                    }

                    if (line != string.Empty && line.Contains("VersionNumber"))
                    {
                        isVersionNumber = true;
                    }
                    if (line != string.Empty && line.Contains("Version"))
                    {
                        isVersion = true;
                    }
                    if (line != string.Empty && line.Contains("UpdateContent"))
                    {
                        isUpdateContent = true;
                    }
                }
                if (string.IsNullOrEmpty(version.version))
                {
                    version.version = "1.0.0";
                }
                if (string.IsNullOrEmpty(version.updateContent))
                {
                    version.updateContent = "优化了主要流程！";
                }
                version.downloadAddress = ConfigurationManager.AppSettings["Localhost"]
                    + @"/Download/com.mingshu.goods.apk";

                result.data = version;
                result.code = 1;
            }
            catch (Exception ex)
            {
                result.code = -1;
                LogUtil.WebError(ex);
                result.message = ex.Message;
                return result;
            }
            return result;
        }

        private string GetVersionFilePath()
        {
            try
            {
                string versionFilePath = ConfigurationManager.AppSettings["AppVersionFilePath"];
                return versionFilePath;
            }
            catch (Exception ex)
            {
                return @"C:\AppVersion.txt";
            }
        }
    }
}

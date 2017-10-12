using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;

using Mingshu.Framework.MSWeb.Common.Utilities;
using Mingshu.Framework.MSWeb.Web.Extensions;
using Mingshu.Framework.MSWeb.Web.WebApi;

namespace JdwxWeb.Controllers
{
    public class UtilController : ApiController
    {
        //private IDictionaryService dictionaryService;
        public UtilController(/*IDictionaryService dictionaryService*/)
        {
            //this.dictionaryService = dictionaryService;
        }
        /// <summary>
        /// 文件上传
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public object Upload()
        {
            try
            {
                if (HttpContext.Current.Request.Files.Count > 0)
                {
                    var dir = HttpContext.Current.Request.Form["dir"];
                    if (!string.IsNullOrWhiteSpace(dir))
                    {
                        dir = Path.Combine("Files", dir);
                    }
                    else
                    {
                        dir = "Files";
                    }
                    var today = DateTime.Today;
                    var folder = string.Format("{0:yyyyMM}", today);
                    dir = Path.Combine(dir, folder);
                    var serverDir = HttpContext.Current.Server.MapPath(Path.Combine("~", dir));
                    if (!Directory.Exists(serverDir))
                    {
                        Directory.CreateDirectory(serverDir);
                    }
                    var file = HttpContext.Current.Request.Files[0];
                    var ext = Path.GetExtension(file.FileName);
                    var fileName = $"file-{Guid.NewGuid():N}{ext}";
                    var path = Path.Combine(dir, fileName);
                    var serverPath = Path.Combine(serverDir, fileName);
                    file.SaveAs(serverPath);
                    return ResponseResult.OK(path);
                }
                return Request.Fail("没有文件。");
            }
            catch (Exception ex)
            {
                return Request.Fail(ex.Message);
            }
        }

        /// <summary>
        /// 服务器文件删除
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        [HttpPost]
        public object RemoveUpload(dynamic file)
        {
            try
            {
                string strFile = file.ToString();
                if (strFile.Trim(' ', '~', '/', '\\').ToLower().StartsWith("files"))
                {
                    var phPath = HttpContext.Current.Server.MapPath(Path.Combine("~", strFile));
                    if (System.IO.File.Exists(phPath))
                    {
                        System.IO.File.Delete(phPath);
                    }
                    return this.Json(ResponseResult.OK());
                }
                else
                {
                    return Request.Fail("不是所有文件都允许删除。");
                }
            }
            catch (Exception ex)
            {
                return Request.Fail(ex.Message);
            }
        }


        //public async Task<object> GetEnumMappers()
        //{
        //    var enums = Util.GetEnumMappers();
        //    //var dics = await dictionaryService.GetEnumInfos();
        //    //enums.AddRange(dics);
        //    return ResponseResult.OK(enums);
        //}
        [HttpGet]
        public HttpResponseMessage ValidateCode()
        {
            var validCode = new ValidateCode();
            var code = validCode.CreateValidateCode(4);
            //HttpContext.Current.Session["ValidateCode"] = code;
            var bytes = validCode.CreateValidateGraphic(code);
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = new ByteArrayContent(bytes);
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("image/png");
            return result;
        }
    }
}
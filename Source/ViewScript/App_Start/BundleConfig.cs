using System.Web;
using System.Web.Optimization;

namespace Website
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/site.js")
                .Include(
                    "~/Scripts/jquery-1.11.1.js",
                    "~/Scripts/viewscript.js"
                )
                .IncludeDirectory("~/Scripts/views", "*.js", true));
        }
    }
}

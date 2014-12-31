View Script
===========

This is a small framework that allow typescript object to be executed when a html page is loaded.

Usage
-----

1. In your project create the typescript file **Scripts/views/shared/layout.ts**
2. Paste the following code into the new file 
``` Typescript
module views.shared {
    export class layout extends views.viewBase {
        load() {
            super.load();
            alert('I have loaded');
            this.$view.click(() => { this.$view.remove() });
        }
        unload() {
            super.unload();
        }
    }
}
```
3. In your **Views/Shared/_Layout.cshtml** add a data-viewscript attribute to to your body tag
``` html
<body data-viewscript="views.shared.layout">
```
4. Create a new bundle
``` C#
public static void RegisterBundles(BundleCollection bundles)
{
    bundles.Add(new ScriptBundle("~/Scripts/site.js")
        .Include(
            "~/Scripts/jquery-1.11.1.js",
            "~/Scripts/viewscript.js"
        )
        .IncludeDirectory("~/Scripts/views", "*.js", true));
}
```
5. Add the bundle to your layout
``` cshtml
<head>
    <title>@ViewBag.Title</title>
    @Scripts.Render("~/Scripts/site.js")
</head>
```

when you open you page you will get a message and clicking on the text will remove it.
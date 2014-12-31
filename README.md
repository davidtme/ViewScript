View Script
===========

View Script is a small framework that allow ASP.NET MVC cshtml files to decorate sections of html with Typescript functions to be executed.

Usage
-----

1. Install the ViewScript nuget package:
```
PM> Install-Package AttributeRouting
```
2. In your project create a typescript file **Scripts/views/shared/layout.ts** and paste the following code into the new file 
``` typescript
module views.shared {
    export function layout() {
        var $view = $(this);
        $view.css('background-color', '#ddd');
        alert('loaded');
    }
}
```
3. In your **Views/Shared/_Layout.cshtml** add a data-viewscript attribute to your body tag
``` html
<body data-viewscript="views.shared.layout">
```
4. Create a new bundle
``` csharp
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

When you open your page you the background color will change and you will get an alert message.

You can decorate any element with the data-viewscript attribute. The called function's **this** object is set to the element.

Checkout the demo site for a more in depth demo.
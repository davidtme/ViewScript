﻿var views;
(function (views) {
    var viewBase = (function () {
        function viewBase() {
        }
        viewBase.prototype.init = function (element) {
            this.$view = $(element);
            this.$view.on('viewscriptremove', this.unload);
        };

        viewBase.prototype.load = function () {
        };

        viewBase.prototype.unload = function () {
        };
        return viewBase;
    })();
    views.viewBase = viewBase;
})(views || (views = {}));

(function ($) {
    $.event.special.viewscriptremove = {
        remove: function (o) {
            if (o.handler) {
                o.handler();
            }
        }
    };

    function runViewScript() {
        var _this = this;
        var $this = $(this);
        var scripts = $this.attr("data-viewscript").split(" ");

        $this.removeAttr("data-viewscript");

        $.each(scripts, function (i, name) {
            var current = window;
            var parts = name.split(".");

            $.each(parts, function (j, partName) {
                current = current[partName];
                return current !== undefined && current !== null;
            });

            if (current !== undefined && current !== null) {
                var view = new current();
                view.init(_this);
                view.load();
            }
        });
    }

    $.each(["append", "replaceWith", "html", "after"], function (i, name) {
        var current = $.fn[name];
        $.fn[name] = function () {
            var result = current.apply(this, arguments);
            $("[data-viewscript]").each(runViewScript);
            return result;
        };
    });

    $(function () {
        $("[data-viewscript]").each(runViewScript);
    });
})(jQuery);
//# sourceMappingURL=viewscript.js.map

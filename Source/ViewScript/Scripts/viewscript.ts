module views {
    export class viewBase {
        $view: JQuery;

        init(element: Element) {
            this.$view = $(element);
            this.$view.on('viewscriptremove', this.unload);
        }

        load() {
        }

        unload() {
        }
    }
}

($ => {
    $.event.special.viewscriptremove = {
        remove(o) {
            if (o.handler) {
                o.handler();
            }
        }
    }

    function runViewScript() {

        var $this = $(this);
        var scripts = <string[]>$this.attr("data-viewscript").split(" ");

        $this.removeAttr("data-viewscript");

        $.each(scripts, (i, name: string) => {
            var current = <any>window;
            var parts = name.split(".");

            $.each(parts, (j, partName: string) => {
                current = current[partName];
                return current !== undefined && current !== null;
            });

            if (current !== undefined && current !== null) {
                var view = <views.viewBase>new current();
                view.init(this);
                view.load();
            }
        });
    }

    $.each(["append", "replaceWith", "html", "after"], (i, name: string) => {
        var current = $.fn[name];
        $.fn[name] = function () {
            var result = current.apply(this, arguments);
            $("[data-viewscript]").each(runViewScript);
            return result;
        }
    });

    $(() => {
        $("[data-viewscript]").each(runViewScript);
    });

})(jQuery);
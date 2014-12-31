var views;
(function (views) {
    (function (home) {
        function item() {
            var $view = $(this);

            $view.css('color', home.getRandomColor());

            $view.on('viewscriptremove', function () {
                alert("I've been removed");
            });

            $view.click(function () {
                $view.remove();
            });
        }
        home.item = item;
    })(views.home || (views.home = {}));
    var home = views.home;
})(views || (views = {}));
//# sourceMappingURL=item.js.map

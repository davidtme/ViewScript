var views;
(function (views) {
    (function (shared) {
        function navigation() {
            var $view = $(this);

            $view.on('click', 'li', function () {
                var $this = $(this);
                $this.siblings().css('color', '');
                $this.css('color', 'red');
            });
        }
        shared.navigation = navigation;
    })(views.shared || (views.shared = {}));
    var shared = views.shared;
})(views || (views = {}));
//# sourceMappingURL=navigation.js.map

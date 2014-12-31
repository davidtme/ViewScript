var views;
(function (views) {
    (function (shared) {
        function layout() {
            var $view = $(this);
            $view.css('background-color', '#ddd');
        }
        shared.layout = layout;
    })(views.shared || (views.shared = {}));
    var shared = views.shared;
})(views || (views = {}));
//# sourceMappingURL=layout.js.map

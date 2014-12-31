var views;
(function (views) {
    (function (home) {
        function index() {
            var $view = $(this);
            var $placeholder = $view.find('.placeholder');

            function buttonClicked() {
                var $button = $(this);

                $.get("/home/item", function (html) {
                    $placeholder.append($(html));
                });
            }

            $view.find('h1').click(function () {
                $view.css('background-color', home.getRandomColor());
            });
            $view.find('input[type="button"]').click(buttonClicked);
        }
        home.index = index;

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        home.getRandomColor = getRandomColor;
    })(views.home || (views.home = {}));
    var home = views.home;
})(views || (views = {}));
//# sourceMappingURL=index.js.map

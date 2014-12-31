module views.home {
    export function index() {
        var $view = $(this);
        var $placeholder = $view.find('.placeholder');

        function buttonClicked() {
            var $button = $(this);

            $.get("/home/item", html => {
                $placeholder.append($(html));
            });
        }

        $view.find('h1').click(() => { $view.css('background-color', home.getRandomColor()); });
        $view.find('input[type="button"]').click(buttonClicked);
    }

    export function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
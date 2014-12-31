module views.shared {
    export function navigation() {
        var $view = $(this);

        $view.on('click', 'li', function () {
            var $this = $(this);
            $this.siblings().css('color', '');
            $this.css('color', 'red');
        });
    }
}
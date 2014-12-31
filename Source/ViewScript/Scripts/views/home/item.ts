module views.home {
    export function item() {
        var $view = $(this);

        $view.css('color', home.getRandomColor());

        $view.on('viewscriptremove', () => {
            alert("I've been removed");
        });

        $view.click(() => {
            $view.remove();
        });
    }
}
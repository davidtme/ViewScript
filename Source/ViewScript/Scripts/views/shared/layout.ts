module views.shared {

    export class layout extends views.viewBase {
        load() {
            super.load();
            this.$view.click(() => { this.$view.remove() });
        }

        unload() {
            super.unload();
        }
    }
}
declare module views {
    class viewBase {
        public $view: JQuery;
        public init(element: Element): void;
        public load(): void;
        public unload(): void;
    }
}

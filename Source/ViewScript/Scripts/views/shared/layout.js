var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var views;
(function (views) {
    (function (shared) {
        var layout = (function (_super) {
            __extends(layout, _super);
            function layout() {
                _super.apply(this, arguments);
            }
            layout.prototype.load = function () {
                var _this = this;
                _super.prototype.load.call(this);
                this.$view.click(function () {
                    _this.$view.remove();
                });
            };

            layout.prototype.unload = function () {
                _super.prototype.unload.call(this);
            };
            return layout;
        })(views.viewBase);
        shared.layout = layout;
    })(views.shared || (views.shared = {}));
    var shared = views.shared;
})(views || (views = {}));
//# sourceMappingURL=layout.js.map

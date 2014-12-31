var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var views;
(function (views) {
    (function (shared) {
        var index = (function (_super) {
            __extends(index, _super);
            function index() {
                _super.apply(this, arguments);
            }
            index.prototype.load = function () {
                var _this = this;
                _super.prototype.load.call(this);
                this.$view.click(function () {
                    _this.$view.remove();
                });
            };

            index.prototype.unload = function () {
                _super.prototype.unload.call(this);
            };
            return index;
        })(views.viewBase);
        shared.index = index;
    })(views.shared || (views.shared = {}));
    var shared = views.shared;
})(views || (views = {}));
//# sourceMappingURL=index.js.map

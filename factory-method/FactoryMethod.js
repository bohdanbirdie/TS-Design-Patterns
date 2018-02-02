var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MacButton = /** @class */ (function () {
    function MacButton() {
        this.render();
    }
    MacButton.prototype.render = function () {
        console.log('MacButton was rendered');
    };
    MacButton.prototype.onClick = function (callback) {
        callback('MacButton');
    };
    return MacButton;
}());
var WebButton = /** @class */ (function () {
    function WebButton() {
        this.render();
    }
    WebButton.prototype.render = function () {
        console.log('WebButton was rendered');
    };
    WebButton.prototype.onClick = function (callback) {
        callback('MacButton');
    };
    return WebButton;
}());
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.prototype.renderWindow = function () {
        this.button = this.createButton();
        this.button.onClick(function (env) { return console.log(env + 'onClick callback'); });
    };
    return Dialog;
}());
var WebDialog = /** @class */ (function (_super) {
    __extends(WebDialog, _super);
    function WebDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDialog.prototype.createButton = function () {
        return new WebButton();
    };
    return WebDialog;
}(Dialog));
var MacDialog = /** @class */ (function (_super) {
    __extends(MacDialog, _super);
    function MacDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MacDialog.prototype.createButton = function () {
        return new MacButton();
    };
    return MacDialog;
}(Dialog));
var Application = /** @class */ (function () {
    function Application(env) {
        switch (env) {
            case envType.web:
                this.dialog = new WebDialog();
                break;
            case envType.mac:
                this.dialog = new MacDialog();
                break;
            default:
                this.dialog = null;
                console.log('provided ENV is not supported');
        }
        if (this.dialog)
            this.dialog.renderWindow();
    }
    return Application;
}());
var envType;
(function (envType) {
    envType["mac"] = "mac";
    envType["web"] = "web";
})(envType || (envType = {}));
new Application(envType.mac);
new Application(envType.web);
new Application('ios');

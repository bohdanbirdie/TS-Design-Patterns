var MacOSButton = /** @class */ (function () {
    function MacOSButton() {
    }
    MacOSButton.prototype.paint = function () {
        console.log("You have created MacOSButton.");
    };
    return MacOSButton;
}());
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.paint = function () {
        console.log("You have created WindowsButton.");
    };
    return WindowsButton;
}());
var MacOSCheckbox = /** @class */ (function () {
    function MacOSCheckbox() {
    }
    MacOSCheckbox.prototype.paint = function () {
        console.log("You have created MacOSCheckbox.");
    };
    return MacOSCheckbox;
}());
var WindowsCheckbox = /** @class */ (function () {
    function WindowsCheckbox() {
    }
    WindowsCheckbox.prototype.paint = function () {
        console.log("You have created WindowsCheckbox.");
    };
    return WindowsCheckbox;
}());
var MacOSFactory = /** @class */ (function () {
    function MacOSFactory() {
    }
    MacOSFactory.prototype.createButton = function () {
        return new MacOSButton();
    };
    MacOSFactory.prototype.createCheckbox = function () {
        return new MacOSCheckbox();
    };
    return MacOSFactory;
}());
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory.prototype.createCheckbox = function () {
        return new WindowsCheckbox();
    };
    return WindowsFactory;
}());
var Application = /** @class */ (function () {
    function Application(factory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }
    Application.prototype.paint = function () {
        this.button.paint();
        this.checkbox.paint();
    };
    return Application;
}());
var Demo = /** @class */ (function () {
    function Demo(os) {
        this.app = Demo.configureApplication(os);
        this.app ? this.app.paint() : null;
    }
    Demo.configureApplication = function (os) {
        var app;
        var factory;
        switch (os) {
            case osType.mac:
                factory = new MacOSFactory();
                app = new Application(factory);
                break;
            case osType.win:
                factory = new WindowsFactory();
                app = new Application(factory);
                break;
            default:
                console.log('provided OS is not supported');
        }
        return app ? app : null;
    };
    return Demo;
}());
var osType;
(function (osType) {
    osType["mac"] = "macos";
    osType["win"] = "windows";
})(osType || (osType = {}));
new Demo(osType.mac);
new Demo(osType.win);
new Demo('linux');

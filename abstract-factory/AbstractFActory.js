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
        this.app.paint();
    }
    Demo.configureApplication = function (os) {
        var app;
        var factory;
        if (os === 'macos') {
            factory = new MacOSFactory();
        }
        else {
            factory = new WindowsFactory();
        }
        app = new Application(factory);
        return app;
    };
    return Demo;
}());
new Demo('macos');
new Demo('win');

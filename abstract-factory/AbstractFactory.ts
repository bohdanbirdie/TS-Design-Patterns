interface Button {
    paint(): void;
}

interface Checkbox {
    paint(): void;
}


class MacOSButton implements Button {

    paint(): void {
        console.log("You have created MacOSButton.");
    }
}

class WindowsButton implements Button {

    paint(): void {
        console.log("You have created WindowsButton.");
    }
}

class MacOSCheckbox implements Checkbox {

    paint(): void {
        console.log("You have created MacOSCheckbox.");
    }
}

class WindowsCheckbox implements Checkbox {

    paint(): void {
        console.log("You have created WindowsCheckbox.");
    }
}

interface GUIFactory {
    createButton(): Button;

    createCheckbox(): Checkbox;
}

class MacOSFactory implements GUIFactory {
    createButton(): MacOSButton {
        return new MacOSButton();
    }

    createCheckbox(): MacOSCheckbox {
        return new MacOSCheckbox();
    }
}

class WindowsFactory implements GUIFactory {
    createButton(): WindowsButton {
        return new WindowsButton();
    }

    createCheckbox(): WindowsCheckbox {
        return new WindowsCheckbox();
    }
}

class Application {
    private button: Button;
    private checkbox: Checkbox;

    constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    paint(): void {
        this.button.paint();
        this.checkbox.paint();
    }
}

class Demo {
    app: Application;

    static configureApplication(os: string): Application {
        let app: Application;
        let factory: GUIFactory;

        switch (os){
            case osType.mac:
                factory = new MacOSFactory();
                app = new Application(factory);
                break;
            case osType.win:
                factory = new WindowsFactory();
                app = new Application(factory);
                break;
            default:
                console.log('provided OS is not supported')
        }



        return app ? app : null;
    }


    constructor(os: string){
        this.app = Demo.configureApplication(os);
        this.app ? this.app.paint() : null;

    }
}

enum osType {
    mac = 'macos',
    win = 'windows'

}

new Demo(osType.mac);
new Demo(osType.win);

new Demo('linux');

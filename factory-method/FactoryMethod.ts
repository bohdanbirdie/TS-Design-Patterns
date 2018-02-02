interface Button {
    render(): void;

    onClick(callback: Function): void;
}

class MacButton implements Button {
    constructor() {
        this.render();
    }

    render() {
        console.log('MacButton was rendered');
    }

    onClick(callback) {
        callback('MacButton')
    }
}

class WebButton implements Button {
    constructor() {
        this.render();
    }

    render() {
        console.log('WebButton was rendered');
    }

    onClick(callback) {
        callback('MacButton')
    }
}


abstract class Dialog {
    button: Button;

    renderWindow(): void {
        this.button = this.createButton();
        this.button.onClick((env) => console.log(env + 'onClick callback'))
    }

    abstract createButton(): Button;
}

class WebDialog extends Dialog {
    createButton(): Button {
        return new WebButton();
    }
}

class MacDialog extends Dialog {
    createButton(): Button {
        return new MacButton();
    }
}

class Application {
    dialog: Dialog;

    constructor(env: string) {
        switch (env){
            case envType.web:
                this.dialog = new WebDialog();
                break;
            case envType.mac:
                this.dialog = new MacDialog();
                break;
            default:
                this.dialog = null;
                console.log('provided ENV is not supported')

        }

        if (this.dialog)
            this.dialog.renderWindow();
    }
}

enum envType {
    mac = 'mac',
    web = 'web'
}

new Application(envType.mac);
new Application(envType.web);
new Application('ios');


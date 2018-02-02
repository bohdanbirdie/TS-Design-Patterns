var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var CarManual = /** @class */ (function () {
    function CarManual() {
        this.detailsDescription = '';
    }
    return CarManual;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.reset = function () {
        this.car = new Car();
    };
    CarBuilder.prototype.setSeats = function (amount) {
        this.car.seats = amount;
    };
    CarBuilder.prototype.installGPS = function () {
        this.car.hasGPS = true;
    };
    CarBuilder.prototype.installComputer = function () {
        this.car.hasComputer = true;
    };
    CarBuilder.prototype.setEngineWith = function (horsePower) {
        this.car.engineHorsePower = horsePower;
    };
    CarBuilder.prototype.getResults = function () {
        return this.car;
    };
    return CarBuilder;
}());
var CarManualBuilder = /** @class */ (function () {
    function CarManualBuilder() {
    }
    CarManualBuilder.prototype.reset = function () {
        this.carManual = new CarManual();
    };
    CarManualBuilder.prototype.setSeats = function (amount) {
        this.carManual.detailsDescription += amount + ' were installed.';
    };
    CarManualBuilder.prototype.installGPS = function () {
        this.carManual.detailsDescription += ' GPS was installed.';
    };
    CarManualBuilder.prototype.installComputer = function () {
        this.carManual.detailsDescription += ' Computer was installed.';
    };
    CarManualBuilder.prototype.setEngineWith = function (horsePower) {
        this.carManual.detailsDescription += " Engine has " + horsePower + " horse power.";
    };
    CarManualBuilder.prototype.getResults = function () {
        return this.carManual;
    };
    return CarManualBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.constructSportCar = function (builder) {
        builder.reset();
        builder.setSeats(2);
        builder.installComputer();
        builder.installGPS();
        builder.setEngineWith(400);
    };
    return Director;
}());
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.makeCar = function () {
        this.director = new Director();
        this.builder = new CarBuilder();
        this.director.constructSportCar(this.builder);
        this.car = this.builder.getResults();
        this.builder = new CarManualBuilder();
        this.director.constructSportCar(this.builder);
        this.carManul = this.builder.getResults();
        console.log(this.carManul.detailsDescription);
    };
    return Application;
}());
var app = new Application();
app.makeCar();

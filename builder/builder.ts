class Car {
    seats: number;
    hasGPS: boolean;
    hasComputer: boolean;
    engineHorsePower: number;
}

class CarManual {
    detailsDecription: string = '';
}

interface Builder {
    reset(): void;

    setSeats(amount: number): void;

    installGPS(): void;

    installComputer(): void;

    setEngineWith(horsePower: number): void;
}

class CarBuilder implements Builder {
    car: Car;

    reset(): void {
        this.car = new Car();
    }

    setSeats(amount): void {
        this.car.seats = amount;
    }

    installGPS() {
        this.car.hasGPS = true;
    }

    installComputer() {
        this.car.hasComputer = true;
    }

    setEngineWith(horsePower) {
        this.car.engineHorsePower = horsePower;
    }

    getResults(): Car {
        return this.car;
    }
}

class CarManualBuilder implements Builder {
    carManual: CarManual;

    reset(): void {
        this.carManual = new CarManual();
    }

    setSeats(amount): void {
        this.carManual.detailsDecription += amount + ' were installed.';
    }

    installGPS() {
        this.carManual.detailsDecription += ' GPS was installed.'
    }

    installComputer() {
        this.carManual.detailsDecription += ' Computer was installed.'
    }

    setEngineWith(horsePower) {
        this.carManual.detailsDecription += ` Engine has ${horsePower} horse power.`
    }

    getResults(): CarManual {
        return this.carManual;
    }
}

class Director {
    constructSportCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(2);
        builder.installComputer();
        builder.installGPS();
        builder.setEngineWith(400);
    }
}

class Application {
    director: Director;
    builder: any;
    car: Car;
    carManul: CarManual;

    makeCar(): void {
        this.director = new Director();

        this.builder = new CarBuilder();
        this.director.constructSportCar(this.builder);
        this.car = this.builder.getResults();

        this.builder = new CarManualBuilder();
        this.director.constructSportCar(this.builder);
        this.carManul = this.builder.getResults();
        console.log(this.carManul.detailsDecription);
    }
}

const app = new Application();
app.makeCar();

class Database {
    private static instance: Database;
    private queryCalls: number = 0;

    static getInstace() {
        if (this.instance) {
            console.log('returning already created instance');
            return this.instance;
        } else {
            console.log('creating instance for the first time');
            this.instance = new Database();
            return this.instance;
        }
    }

    private constructor() {
        console.log('Connecting to the database...')
    }

    query(params: string): string {
        return `query was called ${this.queryCalls} times on this instance, params -> ${params}`;
    }
}

class Application {
    database: Database;

    constructor() {
        this.database = Database.getInstace();

        this.database.query('SELECT * from *;')
        this.database.query('SELECT null from *;')
    }

    trySingleton(): void {
        this.database = Database.getInstace();
        this.database.query('SELECT null from null;')
    }
}

const app: Application = new Application();
app.trySingleton();

abstract class Shape {
    x: number;
    y: number;
    color: string;

    constructor(source?: Shape){
        if (source){
            this.x = source.x;
            this.y = source.y;
            this.color = source.color;
        }

    }
    abstract clone(): Shape;
}

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(source?: Rectangle){
        super(source);
        if (source){
            this.height = source.height;
            this.width = source.width;
        }
    }

    clone(){
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(source?: Circle){
        super(source);
        if (source){
            this.radius = source.radius;
        }
    }

    clone(){
        return new Circle(this);
    }
}

class Application {
    shapes: [Shape];

    constructor(){
        const circle: Circle = new Circle();
        circle.x = 10;
        circle.y = 10;
        circle.color = 'red';
        circle.radius = 5;
        this.shapes = [circle];

        const clonedCircle: Circle = circle.clone();
        clonedCircle.color = 'white';
        this.shapes.push(clonedCircle);

        const rectangle: Rectangle = new Rectangle();

        rectangle.x = 3;
        rectangle.y = 4;
        rectangle.height = 8;
        rectangle.width = 5;
        this.shapes.push(rectangle);

        const clonedRectangle: Rectangle = rectangle.clone();
        clonedRectangle.x = 10;
        this.shapes.push(clonedRectangle);
        console.log(this.shapes)
    }
}

new Application();

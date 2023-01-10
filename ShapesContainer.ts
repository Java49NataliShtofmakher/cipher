import { Shape } from "./ShapeInterface";

export class ShapesContainer implements Shape {
    constructor(private arrayShapes: Array<Shape>) {
    }

    getSquare(): number {
        const sumSquare: number = this.arrayShapes.reduce((res, cur) => res + cur.getSquare(), 0);

        return sumSquare
    }
    getPerimeter(): number {
        const sumPerimeter: number = this.arrayShapes.reduce((res, cur) => res + cur.getPerimeter(), 0);
     
        return sumPerimeter
    }

}
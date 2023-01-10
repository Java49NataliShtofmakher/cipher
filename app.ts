import { Shape } from "./ShapeInterface";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { ShapesContainer } from "./ShapesContainer";


const shapes: Array<Shape> = [
    new Rectangle(3, 4),
    new Square(5),
];

const shapeContainer: ShapesContainer = new ShapesContainer(shapes)

// console.log("[shapeContainer] getSquare", shapeContainer.getSquare());
// console.log("[shapeContainer] getPerimeter", shapeContainer.getPerimeter());
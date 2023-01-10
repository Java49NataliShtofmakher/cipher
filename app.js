"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
const ShapesContainer_1 = require("./ShapesContainer");
const shapes = [
    new Rectangle_1.Rectangle(3, 4),
    new Square_1.Square(5),
];
const shapeContainer = new ShapesContainer_1.ShapesContainer(shapes);
// console.log("[shapeContainer] getSquare", shapeContainer.getSquare());
// console.log("[shapeContainer] getPerimeter", shapeContainer.getPerimeter());
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
class ShapesContainer {
    constructor(arrayShapes) {
        this.arrayShapes = arrayShapes;
    }
    getSquare() {
        const sumSquare = this.arrayShapes.reduce((res, cur) => res + cur.getSquare(), 0);
        return sumSquare;
    }
    getPerimeter() {
        const sumPerimeter = this.arrayShapes.reduce((res, cur) => res + cur.getPerimeter(), 0);
        return sumPerimeter;
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapesContainer.js.map
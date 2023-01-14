"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalesPerson_1 = require("./SalesPerson");
const WageEmployee_1 = require("./WageEmployee");
const Company_1 = require("./Company");
// { name: string; _basicSalary: number; }
const printEmployees = (employees) => employees.forEach((employee) => console.log(employee.name, employee.basicSalary, employee.birthYear));
const employee1 = new WageEmployee_1.WageEmployee(1654, "Vasilisa", 1956, "FrontEnd", 5000, 154, 50);
const employee2 = new SalesPerson_1.SalesPersone(1564, "Boris", 1998, "Web", 15000, 172, 160, 1000, 10);
const employee3 = new SalesPerson_1.SalesPersone(6894, "Nicole", 1995, "HR", 5500, 100, 182, 1000, 10);
const company = new Company_1.Company([employee1, employee2, employee3]);
const employee = new WageEmployee_1.WageEmployee(1234, "Vasya", 1999, "QA", 10000, 100, 50);
company.addEmployee(employee);
// console.log('before remove', company);
// console.log(company.removeEmployee(1564));
// console.log('after remove', company);
// console.log("computed Budget", company.computeBudget());
const employeeBySalaryResult = company.getEmployeeBySalary(9000, 20000);
printEmployees(employeeBySalaryResult);
// import { Shape } from "./ShapeInterface";
// import { Rectangle } from "./Rectangle";
// import { Square } from "./Square";
// import { ShapesContainer } from "./ShapesContainer";
// const shapes: Array<Shape> = [
//     new Rectangle(3, 4),
//     new Square(5),
// ];
// const shapeContainer: ShapesContainer = new ShapesContainer(shapes)
// // console.log("[shapeContainer] getSquare", shapeContainer.getSquare());
// // console.log("[shapeContainer] getPerimeter", shapeContainer.getPerimeter());
//# sourceMappingURL=app.js.map
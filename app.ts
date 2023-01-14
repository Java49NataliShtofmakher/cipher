import { SalesPersone } from "./SalesPerson";
import { WageEmployee } from "./WageEmployee";
import { Company } from "./Company";
import { Employee } from "./Employee";

// { name: string; _basicSalary: number; }
const printEmployees = (employees: Array<Employee>) => employees.forEach((employee: Employee) => console.log(employee.name, employee.basicSalary, employee.birthYear))

const employee1: WageEmployee = new WageEmployee(1654, "Vasilisa", 1956, "FrontEnd", 5000, 154, 50);
const employee2: SalesPersone = new SalesPersone(1564, "Boris", 1998, "Web", 15000, 172, 160, 1000, 10)
const employee3: SalesPersone = new SalesPersone(6894, "Nicole", 1995, "HR", 5500, 100, 182, 1000, 10);

const company: Company = new Company([employee1,employee2,employee3]);

const employee: WageEmployee = new WageEmployee(1234, "Vasya", 1999, "QA", 10000, 100, 50);

company.addEmployee(employee);

// console.log('before remove', company);
// console.log(company.removeEmployee(1564));
// console.log('after remove', company);

// console.log("computed Budget", company.computeBudget());

const employeeBySalaryResult: Employee[] = company.getEmployeeBySalary(9000, 20000)
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



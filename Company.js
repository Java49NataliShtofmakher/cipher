"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(arrayEmployee) {
        this.arrayEmployee = arrayEmployee;
    }
    addEmployee(newEmployee) {
        this.arrayEmployee.push(newEmployee);
    }
    removeEmployee(id) {
        let isEmployeeRemoved = false;
        const filteredEmployee = this.arrayEmployee.filter(employee => employee.id !== id);
        if (filteredEmployee.length !== this.arrayEmployee.length) {
            isEmployeeRemoved = true;
            this.arrayEmployee = filteredEmployee;
        }
        return isEmployeeRemoved;
    }
    getEmployee(id) {
        return this.arrayEmployee.find(employee => employee.id === id) || null;
    }
    getEmployeeBySalary(salaryFrom, salaryTo) {
        return this.arrayEmployee
            .filter(employee => employee.basicSalary > salaryFrom && employee.basicSalary < salaryTo)
            .sort((a, b) => a.birthYear - b.birthYear);
    }
    computeBudget() {
        return this.arrayEmployee.reduce((res, cur) => res + cur.basicSalary, 0);
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map
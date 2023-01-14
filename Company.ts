import { Employee } from "./Employee"

export class Company {
    constructor(private arrayEmployee: Array<Employee>) { }

    addEmployee(newEmployee: Employee): void {
        this.arrayEmployee.push(newEmployee);
    }

    removeEmployee(id: Employee["id"]): boolean {
        let isEmployeeRemoved = false
        const filteredEmployee: Array<Employee> = this.arrayEmployee.filter(employee => employee.id !== id);

        if (filteredEmployee.length !== this.arrayEmployee.length) {
            isEmployeeRemoved = true
            this.arrayEmployee = filteredEmployee
        }

        return isEmployeeRemoved
    }

    getEmployee(id: Employee["id"]): Employee | null {
        return this.arrayEmployee.find(employee => employee.id === id) || null;
    }

    getEmployeeBySalary(salaryFrom: number, salaryTo: number): Array<Employee> {
        return this.arrayEmployee
            .filter(employee => employee.basicSalary > salaryFrom && employee.basicSalary < salaryTo)
            .sort((a, b) => a.birthYear - b.birthYear);
    }

    computeBudget(): number {
        return this.arrayEmployee.reduce((res, cur) => res + cur.basicSalary, 0)
    }
}
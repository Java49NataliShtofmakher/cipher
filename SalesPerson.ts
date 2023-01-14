import { WageEmployee } from "./WageEmployee";

export class SalesPersone extends WageEmployee {
    constructor(id: number,
        name: string,
        birthYear: number,
        department: string,
        basicSalary: number,
        wage: number,
        hours: number,
        private _sales: number,
        private _percent: number) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
    }

    get sales() {
        return this._sales
    }
    set sales(sales: number) {
        this._sales = sales;
    }

    get percent() {
        return this._percent
    }
    set percent(percent: number) {
        this._percent = percent
    }

    computeSalary(): number {
        const salaryNew: number = super.computeSalary() + (this.sales * this.percent) / 100;
        return salaryNew;
    }
}
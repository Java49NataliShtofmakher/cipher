"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPersone = void 0;
const WageEmployee_1 = require("./WageEmployee");
class SalesPersone extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _sales, _percent) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._sales = _sales;
        this._percent = _percent;
    }
    get sales() {
        return this._sales;
    }
    set sales(sales) {
        this._sales = sales;
    }
    get percent() {
        return this._percent;
    }
    set percent(percent) {
        this._percent = percent;
    }
    computeSalary() {
        const salaryNew = super.computeSalary() + (this.sales * this.percent) / 100;
        return salaryNew;
    }
}
exports.SalesPersone = SalesPersone;
//# sourceMappingURL=SalesPerson.js.map
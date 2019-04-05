class EmployeeJs {


    constructor(fName, lName, empNum) {
        this.firstName = fName;
        this.lastName = lName;
        this.employeeNum = empNum;
    }

    printEmpId() {
        console.log(this.employeeId);
    }

    printFNameLength() {
        console.log(this.firstName.length);
    }

    printLength(a) {
        console.log(a.length);
    }

    add(a, b) {
        return a + b;
    }
}

let emp = new EmployeeJs();

emp.printEmpId();

emp.printFNameLength();

emp.firstName = 123;

emp.printFNameLength();

emp.printLNameLength();

emp.printLength(5);

console.log(emp.add("b" + 10));


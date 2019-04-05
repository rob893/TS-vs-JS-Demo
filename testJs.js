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
        console.log(this.firstName);
    }
}

let emp = new EmployeeJs();

emp.printEmpId();

emp.printFNameLength();

emp.firstName = 123;

emp.printLNameLength();
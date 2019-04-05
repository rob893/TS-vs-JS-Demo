class EmployeeTs {

    private firstName: string;
    private lastName: string;
    private employeeNum: number;


    public constructor(fName: string, lName: string, empNum: number) {
        this.firstName = fName;
        this.lastName = lName;
        this.employeeNum = empNum;
    }

    public printEmpId(): void {
        console.log(this.employeeId);
    }

    public printFNameLength(): void {
        console.log(this.firstName.length);
    }
}

let empTs: EmployeeTs = new EmployeeTs();

empTs.printEmpId();

empTs.printFNameLength();

empTs.firstName = 123;

empTs.printFNameLength();




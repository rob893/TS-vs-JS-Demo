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

    public printLength(a: string): void {
        console.log(a.length);
    }

    public add(a: number, b: number): number {
        return a + b;
    }
}

let empTs: EmployeeTs = new EmployeeTs();

empTs.printEmpId();

empTs.printFNameLength();

empTs.firstName = 123;

empTs.printFNameLength();

empTs.printLNameLength();

empTs.printLength(5);

console.log(empTs.add("b", 10));






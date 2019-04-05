class employeeTs {

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
}
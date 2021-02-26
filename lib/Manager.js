class Manager extends Employee {
    constructor(officeNumber) {
        super(officeNumber)
    }
    getRole(); //overwrite to return Manager
}
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(officeNumber)
    }
    // getRole(); //overwrite to return Manager
}

module.exports = Manager;
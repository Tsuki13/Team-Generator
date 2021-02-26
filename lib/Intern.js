const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(school)
    }
    // getSchool();
    // getRole(); //overwrite to return Intern
}

module.exports = Intern;
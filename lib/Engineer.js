const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(github)
    }
    // getGithub();
    // getRole(); //overwrite to return eng
}

module.exports = Engineer;
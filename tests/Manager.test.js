const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager')


test("Manager can set office property", () => {
    const officeNumber = "test"
    const newManager = new Manager("", "", "", officeNumber);
    expect(newManager.officeNumber).toBe(officeNumber);
});

test("Manager method getOfficeNumber() returns officeNumber", () => {
    const officeNumber = "test"
    const newManager = new Manager("", "", "", officeNumber);
    expect(newManager.getOfficeNumber()).toBe(officeNumber);
});

test("Manager method getRole() returns role", () => {
    const role = "Manager"
    const newManager = new Manager(role);
    expect(newManager.getRole()).toBe(role);
});

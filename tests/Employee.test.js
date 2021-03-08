const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Employee can set name property", () => {
    const name = "Rachel";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
});

test("Employee can set id property", () => {
    const id = "123";
    const newEmployee = new Employee("name", id);
    expect(newEmployee.id).toBe(id);
});

test("Employee can set email property", () => {
    const email = "test@test.com";
    const newEmployee = new Employee("name", "id", email);
    expect(newEmployee.email).toBe(email);
});

test("Employee method getName() should return name", () => {
    const name = "Rachel";
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
});

test("Employee method getId() should return id", () => {
    const id = "123";
    const newEmployee = new Employee("name", id, "email");
    expect(newEmployee.getId()).toBe(id);
});

test("Employee method getEmail() should return email", () => {
    const email = "test@test.com";
    const newEmployee = new Employee("name", "id", email);
    expect(newEmployee.getEmail()).toBe(email);
});

test("Employee method getRole() should return employee's role", () => {
    const role = "Employee";
    const newEmployee = new Employee(role);
    expect(newEmployee.getRole()).toBe(role);
});




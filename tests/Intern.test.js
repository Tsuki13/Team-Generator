const Intern = require('../lib/Intern')


test("Intern can set school property", () => {
    const school = "test"
    const newIntern = new Intern("", "", "", school);
    expect(newIntern.school).toBe(school);
});

test("Intern method getSchool() returns school", () => {
    const school = "test"
    const newIntern = new Intern("", "", "", school);
    expect(newIntern.getSchool()).toBe(school);
});

test("Intern method getRole() returns role", () => {
    const role = "Intern"
    const newIntern = new Intern(role);
    expect(newIntern.getRole()).toBe(role);
});
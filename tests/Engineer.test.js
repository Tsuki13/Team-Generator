const Engineer = require('../lib/Engineer')

test("Engineer can set github property", () => {
    const github = "test"
    const newEngineer = new Engineer("", "", "", github);
    expect(newEngineer.github).toBe(github);
});

test("Engineer method getGithub() returns github", () => {
    const github = "test"
    const newEngineer = new Engineer("", "", "", github);
    expect(newEngineer.getGithub()).toBe(github);
});

test("Engineer method getRole() returns role", () => {
    const role = "Engineer"
    const newEngineer = new Engineer(role);
    expect(newEngineer.getRole()).toBe(role);
});
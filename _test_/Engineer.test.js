const Engineer = require("../lib/Engineer");

test("github test", () => {
    const testGithub = "seheon013";
    const employeeInstance = new Engineer("Sean", 41944248, "seheon013@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("getGithub check.", () => {
    const testGithub = "seheon013";
    const employeeInstance = new Engineer("Sean", 41944248, "seheon013@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Role check.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Sean", 41944248, "seheon013@gmail.com", "seheon013");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
const Intern = require("../lib/Intern")

test("school check.", () => {
    const testSchool = "UCI";
    const employeeInstance = new Intern("Sean", 41944248, "seheon013@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("getSchool check.", () => {
    const testSchool = "UCI";
    const employeeInstance = new Intern("Sean", 41944248, "seheon013@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Role check.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Sean", 41944248, "seheon013@gmail.com", "UCI");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
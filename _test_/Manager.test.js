const Manager = require("../lib/Manager");

test("Office number test.", () => {
    const testOfficeNumber = 949;
    const employeeInstance = new Manager("James", 2, "jamesljenks@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("getOfficeNumber check.", () => {
    const testOfficeNumber = 949;
    const employeeInstance = new Manager("James", 2, "jamesljenks@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Role check.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Sean", 41944248, "seheon013@gmail.com", 949);
    expect(employeeInstance.getRole()).toBe(returnValue);
});
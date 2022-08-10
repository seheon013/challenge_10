const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Name test", () => {
    const name = "Sean";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("ID test.", () => {
    const id = 41944248;
    const employeeInstance = new Employee("Sean", id);
    expect(employeeInstance.id).toBe(id);
})

test("Email test.", () => {
    const email = "seheon013@gmail.com";
    const employeeInstance = new Employee("Sean", 41944248, email);
    expect(employeeInstance.email).toBe(email);
})



test("getName check.", () => {
    const testName = "Sean";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("getID check", () => {
    const testID = 41944248;
    const employeeInstance = new Employee("Sean", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("getEmail check", () => {
    const testEmail = "seheon013@gmail.com";
    const employeeInstance = new Employee("Sean", 41944248, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Role check.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Sean", 41944248, "seheon013@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})


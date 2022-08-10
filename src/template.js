function teamTemplate(team){
    function engineertemplate(engineer){
        return `<div class= "card">
            <h1>${engineer.getName()}</h1>
            <h2>${engineer.getRole()}</h2>
            <li>ID: ${engineer.getId()}</li>
            <li>Email: ${engineer.getEmail()}</li>
            <li>GitHub: ${engineer.getGithub()}</li>
        </div>

        `};

    function managertemplate(manager){
        return `<div class= "card">
            <h1>${manager.getName()}</h1>
            <h2>${manager.getRole()}</h2>
            <li>ID: ${manager.getId()}</li>
            <li>Email: ${manager.getEmail()}</li>
            <li>Office Number: ${manager.getOfficeNumber()}</li>
        </div>
        `};

    function interntemplate(intern){
        return `<div class= "card">
        <h1>${intern.getName()}</h1>
        <h2>${intern.getRole()}</h2>
        <li>ID: ${intern.getId()}</li>
        <li>Email: ${intern.getEmail()}</li>
        <li>School: ${intern.getSchool()}</li>
    </div>`
    };

    const url = [];

    url.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineertemplate(engineer)));
    url.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managertemplate(manager))
        .join(""));
    url.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => interntemplate(intern))
        .join(""));
    return url.join("")
} 

module.exports = team => {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEAM MEMBER</title>
</head>
<body>
    <div class="container">
        <div class = "row">
            <div class = "row flex justify-content-center">
                ${teamTemplate(team)}
            </div>
        </div>
    <div>
</body>
</html>`;
;}
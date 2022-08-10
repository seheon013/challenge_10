const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const dist_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(dist_DIR, "index.html");
const teamTemplate = require("./src/template")

team = []
run = true
function init(){
    function createTeam(){
        inquirer.prompt([
            {
            type:"list",
            message: "Choose type of Employee",
            name: "employeePrompt",
            choices: ["Manager", "Engineer", "Intern"]
            },
            {
            type: "input",
            name: "NamePrompt",
            message: "Put his/her name"
            },
        
            {
            type: "input",
            name: "IdPrompt",
            message: "Put his/her Id number"
            },
        
            {
            type: "input",
            name: "EmailPrompt",
            message: "Put his/her email address"
            }

            ]).then(function(responses){
             if(responses.employeePrompt == "Manager"){
                ManagerPrompt(responses)
            }else if (responses.employeePrompt =="Engineer" ){
                EngineerPrompt(responses);
            }else if (responses.employeePrompt =="Intern"){
                InternPromt(responses);
            } 
        })
}
    function ManagerPrompt(responses){
        inquirer.prompt([{
            type:"input",
            name:"OfficeNumber",
            message: "Put his/her Office Number: "
        }]).then(function(response){
            const manager = new Manager(responses.NamePrompt, responses.IdPrompt, responses.EmailPrompt, response.OfficeNumber)
            team.push(manager);
            
            continuePromt();
        });

    }
    function EngineerPrompt(responses){
        inquirer.prompt([{
            type:"input",
            name:"GitHub",
            message: "Put his/her GitHub: "
        }]).then(function(response){
            const engineer = new Engineer(responses.NamePrompt, responses.IdPrompt, responses.EmailPrompt, response.GitHub)
            team.push(engineer);
            
            continuePromt();
        });
    }
    function InternPromt(responses){
        inquirer.prompt([{
            type:"input",
            name:"School",
            message: "Put his/her school name: "
        }]).then(function(response){
            const intern = new Intern(responses.NamePrompt, responses.IdPrompt, responses.EmailPrompt, response.School)
            team.push(intern);
            
            continuePromt();
        });
    }
    function continuePromt(){
        inquirer.prompt([{
            type:"list",
            name:"continue",
            message: "Need to add team member?",
            choices: ["YES", "NO"]
        }]).then(function(response){
            if (response.continue == "NO"){
              run = false
            }
            if(run){
            createTeam();
            }else{
                htmlBuilder();
            }}
        );
        
    }
    function htmlBuilder(){
        console.log("Team created successfully!")
        
        fs.writeFileSync(distPath, teamTemplate(team), "UTF-8")
    }
    continuePromt()
  }
    
init()



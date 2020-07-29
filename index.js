const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: "what is your github username?",
        name: 'username'
        validate: value => {
            if(user.length < 10){
                return "Username is too short.";
            }
            else if(user.toLowerCase() != user){
                return "Username should be lowercase.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
    }
]).then( response => {
    console.log(response);
});

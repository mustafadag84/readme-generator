const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
inquirer.prompt([
    {
        type: 'input',
        message: "What is your github username?",
        name: 'user',
        validate: user => {
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
    },
    {
        type: 'password',
        message: 'Please enter your password',
        name: 'august',
        validate: august => {
            if(august.length < 8){
                return "Password is too short."
            }
            else if(august.length > 32){
                return "Password is too long."
            }
            else{
                return true;
            }
        }
    }
]).then( response => {
    console.log(response.user);
    console.log(response.august);

    // function to write README file
    // fs.writeFile('readme-out.md', JSON.stringify(response, null, 2), 'utf8', err => {
    //     if(err) return console.log(err);
    //     return console.log("We finished writing the file.");
    // });
    let data2Write = "";
    data2Write += "# Password File\n";
    data2Write += "\n";
    data2Write += "## User\n"; // heading #2
    data2Write += "\n";
    data2Write += `${response.user}\n`; // data under heading
    data2Write += "\n";
    data2Write += "## Password\n";
    data2Write += "\n";
    data2Write += `${response.august}\n`;
    data2Write += "\n";
    fs.writeFile('readme-out.md', data2Write, 'utf8', err => {
        if(err) return console.log(err);
        return console.log("We finished writing the file.");
    });

});

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

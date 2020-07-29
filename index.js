const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
inquirer.prompt([
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Explain how to run your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is the project's Table of Contents?",
        name: "contents"
    },
    {
        type: "input",
        message: "What is the installation process?",
        name: "install"
    },
    {
        type: "input",
        message: "What is the usage of this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Add contributors to this project:",
        name: "contact"

    },
    {
        type: "input",
        message: "How should users run the tests",
        name: 'test'
    },
    {
        type: 'input',
        message: "What is your github username?",
        name: 'user',
        validate: user => {
            if (user.length < 10) {
                return "Username is too short.";
            }
            else if (user.toLowerCase() != user) {
                return "Username should be lowercase.";
            }
            else {
                // all validation checks passed
                return true;
            }
        }
    },
    {
        type: 'password',
        message: 'Please enter your password',
        name: 'password',
        validate: password => {
            if (password.length < 8) {
                return "Password is too short."
            }
            else if (password.length > 32) {
                return "Password is too long."
            }
            else {
                return true;
            }
        }
    }
]).then(response => {
    // console.log(response.user);
    // console.log(response.august);
    console.log(response)

    // function to write README file
    // fs.writeFile('readme-out.md', JSON.stringify(response, null, 2), 'utf8', err => {
    //     if(err) return console.log(err);
    //     return console.log("We finished writing the file.");
    // });
    let data2Write = "";
    data2Write += `# ${response.title}\n`;
    data2Write += "\n";

    data2Write += "## Description:\n";
    data2Write += "\n";
    data2Write += `${response.description}\n`; // data under heading

    data2Write += "## Table of Contents:\n";
    data2Write += "\n";
    data2Write += `${response.contents}\n`; // data under heading

    data2Write += "## Installation:\n";
    data2Write += "\n";
    data2Write += `${response.install}\n`; // data under heading

    data2Write += "## Usage:\n";
    data2Write += "\n";
    data2Write += `${response.usage}\n`; // data under heading

    data2Write += "## Contact:\n";
    data2Write += "\n";
    data2Write += `${response.contact}\n`; // data under heading

    data2Write += "## Tests:\n";
    data2Write += "\n";
    data2Write += `${response.test}\n`; // data under heading

    data2Write += "# Password File\n";

    data2Write += "\n";
    data2Write += "## User\n"; // heading #2
    data2Write += "\n";
    data2Write += `${response.user}\n`; // data under heading

    data2Write += "\n";
    data2Write += "## Password\n";
    data2Write += "\n";
    data2Write += `${response.password}\n`;
    data2Write += "\n";
    fs.writeFile('readme-out.md', data2Write, 'utf8', err => {
        if (err) return console.log(err);
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

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
        type: 'checkbox',
        message: 'what is the Table of contents',
        name: 'content',
        choices: ['Installation', 'Usage', 'Contact', 'Tests', 'License', 'Questions']
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
        message: "How should users run the tests",
        name: 'test'
    },
    {
        type: "input",
        message: "Add contributors to this project:",
        name: "contact"

    },
    {
        type: "input",
        message: "Link to your profile picture:",
        name: "picture",
        validate: picture => {
            if(picture.length > 0)
            return true
            else{
                return false
            }
        
        }

    },
    
    {
        type: 'input',
        message: "What is your github username?",
        name: 'user',
        validate: user => {
            if (user.length < 1) {
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
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: emailInput => {
            return (/^.+@.+\..+$/gi.test(emailInput) ? true : `That's not an email!`)
        }
    },
    {
        type: "input",
        message: "Add project's link:",
        name: "link"

    },
    {
        type: "input",
        message: "What is your reponame?",
        name: "reponame"

    },
    
]).then(response => {
    console.log(response)

    
    let data2Write = "";
    data2Write += `# ${response.title}\n`;
    data2Write += "\n";

    data2Write += "## Description:\n";
    data2Write += "\n";
    data2Write += `${response.description}\n`; // data under heading
    data2Write += "\n";

    data2Write += "## Table of Contents:\n";
    data2Write += "\n";
    data2Write += `${response.content.map(contentname => `- ${contentname}`).join('\n')}`; // data under heading
    data2Write += "\n";
    
    data2Write += "## Installation:\n";
    data2Write += "\n";
    data2Write += `${response.install}\n`; // data under heading
    data2Write += "\n";

    data2Write += "## Usage:\n";
    data2Write += "\n";
    data2Write += `${response.usage}\n`; // data under heading
    data2Write += "\n";

    data2Write += "## Tests:\n";
    data2Write += "\n";
    data2Write += `${response.test}\n`; // data under heading
    data2Write += "\n";

    data2Write += "# Contact:\n";
    data2Write += "\n";
    data2Write += `${response.contact}\n`; // data under heading
    data2Write += "\n";

    data2Write += "\n";
    data2Write += `![](${response.picture})\n`; // data under heading

    data2Write += "## User\n"; // heading #2
    data2Write += "\n";
    data2Write += `${response.user}\n`; // data under heading

    data2Write += "## Email:\n";
    data2Write += "\n";
    data2Write += `${response.email}\n`; // data under heading
    data2Write += "\n";

    data2Write += "# Link:\n";
    data2Write += "\n";
    data2Write += `${response.link}\n`; // data under heading
    data2Write += "\n";

    data2Write += `![GitHub](https://img.shields.io/github/license/${response.user}/${response.reponame})`

    fs.writeFile('readme-out.md', data2Write, 'utf8', err => {
        if (err) return console.log(err);
        return console.log("We finished writing the file succesfully.");
    });

});


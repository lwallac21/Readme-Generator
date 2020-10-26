const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Share usage instructions."
    },
    {
        type: "list",
        name: "license",
        choices: [
            "MIT license",
            "Apache license",
            "GPL license",
            "Public Domain"
        ]
    },
    {
        type: "input",
        name: "author",
        message: "Who authored this project?"
    },
    {
        type: "input",
        name: "photo",
        message: "Please provide the path to your profile photo."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address."
    },
    {
        type: "input",
        name: "contributors",
        message: "Did anyone else contribute to your project? Please provide their github profiles, separated by commas."
    },
    {
        type: "input",
        name: "test",
        message: "How can a user run tests on the command line?"
    },
    {
        type: "input",
        name: "contribute",
        message: "If a user needs to, how should they to contribute to this repo."
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        console.log("generate readme...");
        writeToFile("README.MD", generateMarkdown({ ...response }));
    })
}

init();

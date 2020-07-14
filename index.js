const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "Description",
            message: "Please give a good description of your project?"
        },
        {
            type: "input",
            name: "Installation",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "Usage",
            message: "Describe your developed app's usage?"
        },
        {
            type: "input",
            name: "Contributing",
            message: "Please enter any contributors or Credited sites"
        },
        {
            type: "input",
            name: "Tests",
            message: "Enter any test instructions now."
        }

    ])
    const questions = [

    ];

    // function to write README file
    function writeToFile(fileName, data) {
    }

    // function to initialize program
    function init() {

    }

    // function call to initialize program
    init();

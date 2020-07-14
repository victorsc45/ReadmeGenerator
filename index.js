const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
// function call to initialize program
init();
// function to initialize program
async function init() {
    console.log("hi")
    try {
        const answers = await promptUser();

        const markDown = generateMarkdown(answers);

        await writeFileAsync("README.MD", markDown);

        console.log("Successfully wrote to README.MD");
    } catch (err) {
        console.log(err);
    }
}
// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "checkbox",
            message: "What license does your project allow?",
            name: "License",
            choices: [
                "ISC",
                "MIT",
                "BSD-3-Clause",
                "Proprietary"
            ]
        },
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
            name: "Contributors",
            message: "Who were the contributors on this project?",

        },
        {
            type: "input",
            name: "Username",
            message: "What is your GitHub Username?",

        },
        {
            type: "list",
            message: "What is your preferred method of communication?",
            name: "Contact",
            choices: [
                "email",
                "phone",
                "twitter"
            ]
        },
        {
            type: "input",
            name: "Tests",
            message: "Enter any test instructions now."
        },
        {

            type: "input",
            name: "credits",
            message: "enter any url credits used in development of app separated by commas please."
        }


    ])


}







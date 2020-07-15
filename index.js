const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const Choice = require("inquirer/lib/objects/choice");
const writeFileAsync = util.promisify(fs.writeFile);
// function call to initialize program
init();
// function to initialize program
async function init() {
    console.log("hi")
    try {
        const answers = await promptUser();

        const markDown = generateMarkdown(answers);

        await writeFileAsync("README.md", markDown);

        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}
// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "checkbox",
            message: "What license does your project allow?",
            name: "license",
            choices: [
                "isc",
                "mit",
                "bsd-3-clause",
                "afl-3.0"
            ]
        },
        {
            type: "editor",
            name: "description",
            message: "Please give a good description of your project?"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "Describe your developed app's usage?"
        },
        {
            type: "input",
            name: "contributors",
            message: "Who were the contributors on this project?",

        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub Username?",

        },
        {
            type: "list",
            message: "What is your preferred method of communication?",
            name: "contact",
            choices: [
                "email",
                "phone",
                "twitter"
            ]

        },
        {
            type: "input",
            name: "tests",
            message: "Enter any test instructions now."
        },
        {

            type: "input",
            name: "credits",
            message: "enter any url credits used in development of app separated by commas please."
        }


    ])


}







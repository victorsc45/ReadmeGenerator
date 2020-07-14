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
        },
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
        }

    ])
    // if ( ${data.License} = "MIT"){
    //     [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);
    //   } else if ( ${data.License} = "ISC"){
    //     [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    //   } else if ( ${data.License} = "BSD-3-Clause"){
    //     [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    //   } else {
    //     https://img.shields.io/github/license/Victorsc45/https://github.com/victorsc45/ReadmeGenerator
    //   }

}







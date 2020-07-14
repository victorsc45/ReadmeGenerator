const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
// function call to initialize program
init();
// function to initialize program
function init() {
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
        }

    ])

}


    // .then(function (data) {
    //     let fileName = "README.MD";
        // writeFileAsync(fileName, JSON.stringify(data, null, '\t'), function (err) {
        //     if (err) {
        //         throw (err);

        //     }
    //         console.log("success writing to readme file");
    //     })
    // });
    // const questions = [

    // ];

    // function to write README file
    // function writeFileAsync(fileName, data) {

    // }





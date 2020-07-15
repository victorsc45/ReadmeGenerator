// function to generate markdown for README
function generateMarkdown(data) {
  return `
   [![npm version](https://badgen.net/npm/v/inquirer-emoji)](https://www.npmjs.com/package/inquirer-emoji)
   <img src="https://badge.fury.io/js/inquirer.svg" alt="npm">
  # ${data.title} 


   # Licence
  
  >  [![License](https://img.shields.io/badge/License-${data.choices}-blue.svg)](https://opensource.org/licenses/${data.choices})
    
  ### :octocat:
  ### node js :package: 

  # **Description**
    
   > ${data.description}

  ## **Installation**
-    
  * ${data.installation}

  ## **Usage**
-    
    * ${data.usage}

  ### **Contributors**
-    
    * ${data.contributors}

  ## **GitHub Information**
-  
  # '''' https://github.com/${data.username} ''''

  Picture of Developer: 
-
    <img src="https://avatars0.githubusercontent.com/u/20911070?s=400&u=5559b53c96fd67717f991289bcc85bbb64c57f97&v=4" width="250px" >
  
  ## *Contact me by*
  -
    * ${data.contact} 

  ## See screen shots below
    > ${data.tests}

    <img src="./utils/screenshot.jpg" width="500px" >
    
  ### credited urls
  
   * ${data.credits}

      

`;
}

module.exports = generateMarkdown;

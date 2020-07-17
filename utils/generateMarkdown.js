// function to generate markdown for README
function generateMarkdown(data) {
   return `
   [![npm version](https://badgen.net/npm/v/inquirer-emoji)](https://www.npmjs.com/package/inquirer-emoji)
   <img src="https://badge.fury.io/js/inquirer.svg" alt="npm">
 
   # ${data.title} 


   # Licence
  
  >  
     * select the license badge to view licence aggreements:

    [![License](https://img.shields.io/badge/License-${data.license}-lime.svg)](https://opensource.org/licenses/${data.license})
    
  ### :octocat:
  ### node js :package: 

  # Table of Contents
  <!-- toc -->
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [GitHub Information](#github-information)
  * [Questions](#questions)
  * [Credits](#credits)
   <!-- toc stop -->

  # **Description**
    
   > ${data.description}

  ## **Installation**
    
  * ${data.installation}

  ## **Usage**
   
  * ${data.usage}

  ### **Contributors**   

  * ${data.contributors}

  ## **GitHub Information**
 
  # '''' https://github.com/${data.username} ''''

  Picture of Developer: 

  <img src="https://avatars0.githubusercontent.com/u/20911070?s=400&u=5559b53c96fd67717f991289bcc85bbb64c57f97&v=4" width="250px" >
  
  ## *Questions*

  > questions or comments contact me by ${data.contact} : 

     
  ####  ${data.email}

  ## Test Example

   ${data.tests}:
   
<img src="./utils/screenshot.jpg" width="500px" >

   * Link to video for test demonstration

https://drive.google.com/file/d/1rUZHHpgqWhH1ulRpuMnLxKdz-tA4BneW/view
    
  ### Credits
  
   * ${data.credits}
`;
}

module.exports = generateMarkdown;

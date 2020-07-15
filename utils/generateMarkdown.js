// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

   # Licences
   >
   [![License](https://img.shields.io/badge/License-${data.choices}-blue.svg)](https://opensource.org/licenses/${data.choices})
    
 

  # **Description**
   - 
   > ${data.description}

  ## **Installation**
    -
  * ${data.installation}

  ## **Usage**
    -
    * ${data.usage}

  ### **Contributors**
    -
    * ${data.contributing}

  ## **GitHub Information**
  -
  # '''' https://github.com/${data.username} ''''

  *Picture of Developer: 

    https://avatars0.githubusercontent.com/u/20911070?s=400&u=5559b53c96fd67717f991289bcc85bbb64c57f97&v=4
  
  ## *Contact me by*
  -
    * ${data.Contact} 

  ## ** See screen shots below**
    > ${data.tests}

    <img src="./utils/screenshot.jpg" width="500px" >
    
  ### credited urls
  
   * ${data.credits}

      

`;
}

module.exports = generateMarkdown;

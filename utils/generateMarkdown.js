// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title},
        # ${data.Description},
        # ${data.Installation},
        # ${data.Usage},
        # ${data.Contributing},
        # ${data.Tests}
        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);

`;
}

module.exports = generateMarkdown;

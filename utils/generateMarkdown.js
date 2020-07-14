// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
        # ${data.Description}
        # ${data.Installation}
        # ${data.Usage}
        # ${data.Contributing}
        # ${data.Tests}
        # ${data.License.choices}
        [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

`;
}

module.exports = generateMarkdown;

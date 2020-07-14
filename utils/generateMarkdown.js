// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title},
        # ${data.Description},
        # ${data.Installation},
        # ${data.Usage},
        # ${data.Contributing},
        # ${data.Tests}

`;
}

module.exports = generateMarkdown;

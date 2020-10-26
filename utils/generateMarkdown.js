// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents:
-Installation
-Usage
-Credits
-License

## Installation Instructions
${data.installation}

## Usage
${data.usage}

### Running tests
${data.test}

### Contributing to the repo

## Credits
Created by ${data.author} @ ${data.github}
!(${data.photo})


### Contributors
${data.contributors}

## License
This project uses the ${data.license}.
`;
}

module.exports = generateMarkdown;

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

## Credits
Created by ${data.author} 
Github profile: ${data.github}
Email: ${data.email}

![UserPhoto](${data.photo})


### Contributors
${data.contributors}
${data.contribute}

## License
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
`;
}

module.exports = generateMarkdown;

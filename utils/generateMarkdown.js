// function passing in liscense as an arg
// validate lisense exists
// return ![GitHub license](https://img.shields.io/badge/license- ROUTE HERE -blue.svg)


// function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
##Table of Contents:
-Installation
-Usage
-Credits
-License

##Installation Instructions
${data.installation}

##Usage
${data.usage}

###Running tests
${data.test}

###Contributing to the repo

##Credits
Created by ${data.author} @ ${data.github}
!(${data.photo})


###Contributors
${data.contributors[0]} @ ${data.contributors[1]}

##License
This project uses the ${data.license}.


`;
}

module.exports = generateMarkdown;

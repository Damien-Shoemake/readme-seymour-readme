const generateMarkdown = ({ title, description, installation, usage, tests, credits, license, contributing, github, email }) => 

`# ${title}

## Description

- ${description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)


## Installation

- ${installation}

## Usage

- ${usage}

## Credits

- ${credits}

## License

![badmath](https://img.shields.io/github/license/${github}/${title}?style=for-the-badge)

- License template can be found at: (https://choosealicense.com/licenses/${license}/)


## Badges

![badmath](https://img.shields.io/github/repo-size/${github}/${title}?style=for-the-badge)
![badmath](https://img.shields.io/github/languages/count/${github}/${title}?style=for-the-badge)

## Tests

- ${tests}

## Contributing

- ${contributing}

## Questions

Feel free to reach out with any questions at: ${email} or at (https://github.com/${github})
`;

module.exports = { generateMarkdown };

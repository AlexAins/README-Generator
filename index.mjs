import inquirer from "inquirer";
import fs from "fs/promises";

const response = await inquirer
    .prompt([
        {
            type: "input",
            name: "titleInput",
            message: "What is the Title of your Project?",
        },
        {
            type: "input",
            name: "descriptionInput",
            message: "Provide a description for your Project",
        },
        {
            type: "input",
            name: "installationInput",
            message: "Provide installation instructions for your Project",
        },
        {
            type: "input",
            name: "usageInput",
            message: "Provide usage information for your Project",
        },
        {
            type: "input",
            name: "contributionInput",
            message: "What are the contribution guidelines for your Project?",
        },
        {
            type: "input",
            name: "testInput",
            message: "What are the test instructions for your Project?",
        },
        {
            type: "input",
            name: "githubInput",
            message: "What is your GitHub Username?",
        },
        {
            type: "input",
            name: "emailInput",
            message: "What is your email address?",
        },
]);

let readmeTemplate =`
# ${response.titleInput}

## Description
${response.descriptionInput}

## Table of Content

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation


## Usage


## License


## Contributing


## Tests


## Questions
If you have any questions, Please contact me through:
* [GitHub](https://github.com/${response.githubInput})
* [Email](mailto:${response.emailInput})
`;

await fs.writeFile("README.md",readmeTemplate);
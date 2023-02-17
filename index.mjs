// Import needed packages
import inquirer from "inquirer";
import fs from "fs/promises";

// Creating prompt to gather information
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
        {
            type: "list",
            name: "licenseInput",
            message: "What license was used for your Project?",
            choices: ["MIT", "GPLv2", "GPLv3","Apache","MPL 2.0", "Unlicense", "Other"]
        }
]);

// Function to get badge for chosen license
function gatherLicense(license){
    if(license === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if(license === "GPLv2"){
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    }
    else if(license === "GPLv3"){
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    else if(license === "Apache"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if(license === "MPL 2.0"){
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    else if(license === "Unlicense"){
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }else if(license === "Other"){
        return "";
    }
}

// Template for generated README.me including the answers from Prompts
let readmeTemplate =`
# ${response.titleInput}

${gatherLicense(response.licenseInput)}
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
${response.installationInput}

## Usage
${response.usageInput}

## License


## Contributing
${response.contributionInput}

## Tests
${response.testInput}

## Questions
If you have any questions, Please contact me through:
* [GitHub](https://github.com/${response.githubInput})
* [Email](mailto:${response.emailInput})
`;

// Creating new README.me file using FS.
await fs.writeFile("generatedREADME.md",readmeTemplate);

import inquirer from "inquirer";
import fs from "fs/promises";

const response = await inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the Title of your Project?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your Project",
        },
        {
            type: "input",
            name: "installation",
            message: "Provide installation instructions for your Project",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide usage information for your Project",
        },
        {
            type: "input",
            name: "contribution",
            message: "What are the contribution guidelines for your Project?",
        },
        {
            type: "input",
            name: "test",
            message: "What are the test instructions for your Project?",
        },
])
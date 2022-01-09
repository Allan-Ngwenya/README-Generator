function init() {


	const inquirer = require('inquirer');
	const fs = require('fs');
	const generate = require('./utils/generateMarkdown.js');
	const path = require('path');


	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the title of your project?",
				name: "title",
			},
			{
				type: "input",
				message: "What is the description of your project?",
				name: "description",
			},
			{
				type: "input",
				message: "How do you Install your application?",
				name: "installation",
			},
			{
				type: "input",
				message: "How do users use your application?",
				name: "usage",
			},
			{
				type: "checkbox",
				message: "What License did you use for this repository?",
				choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
				name: "license",
			},
			{
				type: "input",
				message: "How many people contributed to the project?",
				name: "contributing",
			},
			{
				type: "input",
				message: "How do people update the repository?",
				name: "repositpry"
			},
			{
				type: "input",
				message: "What is your GitHub account username?",
				name: "github"
			},
			{
				type: "input",
				message: "What is your email address?",
				name: "email"
			},
		])


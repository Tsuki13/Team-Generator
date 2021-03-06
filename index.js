const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const template = require('./src/template');
let team = [];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

};

function menuQuestions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'Would you like to add another member or build your team?',
                choices: ['Add another member', 'Build team']
            }
        ]).then(data => {
            switch (data.menu) {
                case 'Add another member':
                    teamQuestions();
                    break;
                case 'Build team':
                    console.log(team);
                    writeToFile('./dist/Generated-Team.html', template(team));
            }
        })
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email address?',

            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers office number?',
            }
        ]).then(data => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            console.log(manager);
            team.push(manager);
            menuQuestions();
        })
}

teamQuestions = async () => {
    try {
        let choice = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: 'Please select your team members role below.',
                    choices: ['Engineer', 'Intern']
                }
            ])
        console.log(choice)
        if (choice.role === 'Engineer') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the team members name?',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the team members employee ID?',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the team members email address?',
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'Enter engineers github account',

                    }
                ]).then(data => {
                    let engineer = new Engineer(data.name, data.id, data.email, data.github)
                    team.push(engineer);
                    console.log(engineer);
                    menuQuestions();
                })
        } else {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the team members name?',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the team members employee ID?',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the team members email address?',
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "Please enter interns school name"
                    },

                ]).then(data => {
                    let intern = new Intern(data.name, data.id, data.email, data.school)
                    team.push(intern);
                    console.log(intern);
                    menuQuestions();
                })
        }
    } catch (err) {
        console.log(err);
    }
}

init();











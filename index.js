const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const path = require("path");
const fs = require("fs");
const { ModernFakeTimers } = require('@jest/fake-timers');
const { Module } = require('module');
const templateGenerator = require('./src/template');

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
            },
        ]).then(data => {
            console.log(data)
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            console.log(manager)
            let template = templateGenerator(manager)
            fs.writeFile('./dist/Generated-Team.html', template, function (err) {
                if (err) throw err;
                console.log('saved!');
            })
        })
}

init();











#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import commander from 'commander';
import inquirer from 'inquirer';

import createTemplates from './createTemplates.js'
import createComponents from './createComponents.js'
import createSubClass from './createSubClass.js'

commander
    .command('add <type> [name]')
    .action(function(type, name) {
        console.log(
            chalk.red(
                figlet.textSync('Objectiv', {horizontalLayout: 'default'})
            )
        );

        if (type === 'template') {
            createTemplates(name);
        } else if (type === 'component') {
            createComponents(name);
        }
    });

commander
    .command('extend <className> [name]')
    .action(function(className, name) {
        console.log(
            chalk.red(
                figlet.textSync('Objectiv', {horizontalLayout: 'default'})
            )
        );

        createSubClass(className, name);
    });

commander.parse(process.argv);

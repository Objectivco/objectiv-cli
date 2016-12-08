#!/usr/bin/env node

import cli from 'cli';
import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';

import createComponents from './createComponents.js';
import createTemplates from './createTemplates.js';
import createSubClass from './createSubClass.js';

cli.parse({
    component: ['c', 'Create a component'],
    template: ['t', 'Create a Template'],
    subClass: ['s', 'Create a SubClass'],
    help: ['h', 'Help']
});

cli.main(function(args, options) {
    console.log('args: ', args);
    console.log('options: ', options);

    const { component, template, subClass, help } = options;

    if (component) {
        createComponents(args);
    }

    if (template) {
        createTemplates(args);
    }

    if (subClass) {
        createSubClass(args);
    }

    if (help) {
        help();
    }
});

function help() {
    console.log('Help');
    return false;
}

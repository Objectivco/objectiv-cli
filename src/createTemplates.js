import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';

const log = console.log;

const createTemplates = args => {
    const name = args[0];

    // Create the php template file
    fs.writeFileSync(name + '.php', buildPHPTemplate(name));

    // Create the Twig file
    mkdirp.sync('./views/');
    fs.writeFileSync('./views/' + name + '.twig', buildTwigFile(name));

    // Create the sass file
    mkdirp.sync('./assets/sass/templates');
    fs.writeFileSync('./assets/sass/templates/_' + name + '.scss', buildSassFile(name));

    // append the Sass include to the bottom of style.scss
    fs.appendFile('./assets/sass/style.scss', '@import "templates/' + name + '"; \n');

    log(chalk.green.bold(
        '\nYour ' +
        chalk.green.underline.bold(name) +
        ' template was successfully created!'
    ));

    log(chalk.black(
        chalk.bold('Files Created: \n') +
        name + '.php \n' +
        'views/' + name + '.twig \n' +
        'assets/sass/template/_' + name + '.scss \n'
    ));
}

/**
 * Build the content of the PHP file
 * @param  string name the name of the template
 * @return string
 */
function buildPHPTemplate(name){
    return '<?php \n' +
    '/** \n' +
    ' * Template file for ' + name + '\n' +
    ' * View for this file is found in `/views` \n' +
    ' */ \n' +
    '\n' +
    '$context = Timber::get_context(); \n' +
    '$post = new TimberPost(); \n' +
    '$context["post"] = $post; \n' +
    'Timber::render("/views/' + name + '.twig", $context); \n' +
    '\n' +
    '?>';
}

/**
 * Build the content of the Twig file
 * @param  string name the name of the template
 * @return string
 */
function buildTwigFile(name) {
    return '{% extends "base.twig" %} \n' +
    '\n' +
    '{% block content %} \n' +
    '{% endblock %}';
}

/**
 * Build the content of the Sass file
 * @param  string name the name of the template
 * @return string
 */
function buildSassFile(name) {
    return '/** \n' +
    ' * Sass file for ' + name + '\n' +
    ' * View for this file is found in `/views` \n' +
    ' */ \n' +
    '\n';
}

export default createTemplates;

import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';

const log = console.log;

const createComponents = name => {

    // create the partial file
    mkdirp.sync('./partials/');
    fs.writeFileSync('./partials/' + name + '.php');

    // create the view file
    mkdirp.sync('./views/components/');
    fs.writeFileSync('./views/components/' + name + '.twig');

    // create the sass file
    mkdirp.sync('./assets/sass/components/');
    fs.writeFileSync('./assets/sass/components/_' + name + '.scss', buildSassFile(name));

    // append the Sass include to the bottom of style.scss
    fs.appendFile('./assets/sass/style.scss', '@import "components/' + name + '"; \r\n');

    log(chalk.green.bold(
        '\nYour ' +
        chalk.green.underline.bold(name) +
        ' component was successfully created!'
    ));

    log(chalk.black(
        chalk.bold('Files Created: \n') +
        'partials/' + name + '.php \n' +
        'views/components/' + name + '.twig \n' +
        'assets/sass/components/_' + name + '.scss \n'
    ));
};

/**
 * Create the content for the sass file
 *
 */
function buildSassFile(name) {
    return '/** \n' +
    ' * Sass file for ' + name + '\n' +
    ' * View for this file is found in `/views/components` \n' +
    ' */ \n' +
    '\n';
}

export default createComponents;

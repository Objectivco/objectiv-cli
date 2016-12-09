var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var createComponents = require('../lib/createComponents.js');
var createTemplates = require('../lib/createTemplates.js');
var createSubClass = require('../lib/createSubClass.js');

function cleanUp(dir) {
    rimraf.sync('./' + dir);
}

describe('downloadTheme', function() {
    it ('should download the repo from Github', function(done) {
        
    });
});

describe('createComponents', function() {
    it ('should create a PHP file, Twig template, and Sass file', function(done) {
        var args = ['test'];
        var name = args[0];

        createComponents.default(args);

        if (fs.existsSync('./partials/' + name + '.php')) {
            console.log('php component exists');
            if (fs.existsSync('./views/components/' + name + '.twig')) {
                console.log('twig template exists');
                cleanUp('views/components');
            } else {
                throw new Error('Twig template not created');
            }

            if (fs.existsSync('./assets/sass/components/_' + name + '.scss')) {
                console.log('sass file exists');
                cleanUp('assets/sass/components');
                return done();
            } else {
                throw new Error('Sass file not created');
            }
        } else {
            cleanUp('partials');
            throw new Error('PHP file not created');
        }
    });
});

describe('createTemplates', function() {
    it ('should create a PHP file, Twig template, and Sass file', function(done) {
        var args = ['test'];
        var name = args[0];

        createTemplates.default(args);

        if (fs.existsSync('./' + name + '.php')) {
            console.log('php template exists');

            if (fs.existsSync('./views/' + name + '.twig')) {
                console.log('twig template exists');
                cleanUp('views');
            } else {
                throw new Error('Twig template not created');
            }

            if (fs.existsSync('./assets/sass/templates/_' + name + '.scss')) {
                console.log('sass file exists');
                cleanUp('assets/sass/templates');
                return done();
            } else {
                throw new Error('Sass template not created');
            }

        } else {
            cleanUp('views');
            throw new Error('PHP template not created');
        }
    });
});

describe('createSubClass', function() {
    it ('should create a subClass of TimberPost', function(done) {
        var args = ['post', 'testPost'];
        var type = args[0];
        var name = args[1];

        createSubClass.default(args);

        if (fs.existsSync('./lib/' + type + '-' + name + '.php')) {
            console.log('subclass exists');
            cleanUp('lib');
            return done();
        } else {
            cleanUp('lib');
            throw new Error('SubClass not created');
        }
    });
});

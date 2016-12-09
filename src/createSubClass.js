import fs from 'fs';
import mkdirp from 'mkdirp';

const createSubClass = (className, name) => {

    mkdirp.sync('./lib/');
    fs.writeFileSync('./lib/' + className + '-' + name + '.php');

    console.log('subClass created');
}

export default createSubClass;

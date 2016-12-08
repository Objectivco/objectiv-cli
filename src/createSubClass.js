import fs from 'fs';
import mkdirp from 'mkdirp';

const createSubClass = args => {
    const type = args[0];
    const name = args[1];

    mkdirp.sync('./lib/');
    fs.writeFileSync('./lib/' + type + '-' + name + '.php');

    console.log('subClass created');
}

export default createSubClass;

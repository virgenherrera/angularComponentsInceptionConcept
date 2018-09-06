const fs = require('fs');
const path = require('path');
const concat = require('concat');
const angularJSON = require('../angular.json');
const { defaultProject } = angularJSON;
const { outputPath } = angularJSON.projects[defaultProject].architect.build.options;
const srcFiles = [
    'runtime',
    'polyfills',
    'styles',
    'scripts',
    'main',
];

function bundleComponent() {
    const files = srcFiles.reduce((acc, file) => {
        const filePath = path.join(__dirname, `../${outputPath}/${file}.js`);
        if (fs.existsSync(filePath)) {
            acc.push(filePath);
        }

        return acc;
    }, []);
    const destinyPath = path.join(__dirname, `../${outputPath.split('/').shift()}/component/`);
    const dest = path.join(destinyPath, `bundle.js`);

    if (!fs.existsSync(destinyPath)) {
        fs.mkdirSync(destinyPath);
    }

    concat(files, dest);

    fs.copyFileSync(path.join(__dirname, `/example/index.html`), path.join(destinyPath, 'index.html'))
}

(bundleComponent)();

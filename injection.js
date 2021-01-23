
const path = require('path');
const fs = require('fs');

const index = path.resolve('./build/index.html');

let lineArray = [];

fs.readFile(index, 'utf8', async (err, data) => {
    if (!err) {
        lineArray = data.split('><').join('>\n<').split('\n');

        processScripts(lineArray);        
    }
});

const processScripts = () => {
    const scriptTags = lineArray.filter(c => c.indexOf('.chunk.js">') > -1);

    scriptTags.forEach((tag, i) => {
        const scriptFileName = tag.split('"').filter(c => c.indexOf('.chunk.js') > -1)[0];

        fs.readFile(path.resolve(`./build${scriptFileName}`), 'utf8', (err, script) => {
            if (!err) {
                const tagIndex = lineArray.indexOf(tag);
                lineArray[tagIndex] = `<script>${script}`;
            } else {
                throw err;
            }

            if (i === scriptTags.length - 1) {
                processCSS();
            }
        })
    });
}

const processCSS = () => {
    const styleTag = lineArray.filter(c => c.indexOf('/static/css/main.') > -1)[0];

    const actualFileName = styleTag.split('"').filter(c => c.indexOf('.css') > -1)[0].split('/').pop();

    const styleIndex = lineArray.indexOf(styleTag);

    lineArray.splice(styleIndex + 1, 1);

    fs.readFile(path.resolve(`./build/static/css/${actualFileName}`), 'utf8', async (err, css) => {
        if (!err) {
            lineArray[styleIndex] = `<style>${css}</style>`;
            fs.writeFile(index, lineArray.join(''), 'utf8', () => {});
            return;
        }
    });
}
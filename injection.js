
const path = require('path');
const fs = require('fs');

const index = path.resolve('./build/index.html');

fs.readFile(index, 'utf8', (err, data) => {
    if (!err) {
        var lineArray = data.split('><').join('>\n<').split('\n');

        const styleTag = lineArray.filter(c => c.indexOf('/static/css/main.') > -1)[0];

        const scriptTags = lineArray.filter(c => c.indexOf('.chunk.js">') > -1);

        scriptTags.forEach(tag => {
            const scriptFileName = tag.split('"').filter(c => c.indexOf('.chunk.js') > -1)[0];
            
            fs.readFile(path.resolve(`./build${scriptFileName}`), 'utf8', (err, script) => {
                if(!err) {
                    const tagIndex = lineArray.indexOf(tag);
                    lineArray[tagIndex] = `<script>${script}`;
                } else {
                    throw err;
                }
            })
        });

        const actualFileName = styleTag.split('"').filter(c => c.indexOf('.css') > -1)[0].split('/').pop();

        const styleIndex = lineArray.indexOf(styleTag);

        lineArray.splice(styleIndex + 1, 1);

        fs.readFile(path.resolve(`./build/static/css/${actualFileName}`), 'utf8', (err, css) => {
            if(!err) {
                lineArray[styleIndex] = `<style>${css}</style>`;
                fs.writeFile(index, lineArray.join(''), 'utf8', ()  => null);
            }
        });

        // var t = data.replace('</head>', '\n</head>').replace('<script ', '\n<script ');

        // const elementArr = t.split('\n');
        // const toReplace = elementArr.filter(c => c.indexOf('styles.') > -1)[0];

        // const actualFileName = toReplace.split('"').filter(c => c.indexOf('styles.') > -1)[0];
        // const filePath = path.resolve(`./dist/developer-blog/${actualFileName}`);

        // fs.readFile(filePath, 'utf8', (err, d) => {
        //     if (!err) {
        //         let css = data.replace(toReplace, `<style>${d}</style>`);
        //         fs.writeFile(index, css, 'utf8', () => null);
        //     }
        // });
    }
});
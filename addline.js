const fs = require('fs');

function add() {
    let content = fs.readFileSync('./lib/index.js');
    let updatedContent = '/// <reference path="./index.d.ts" />\n' + content;

    fs.writeFileSync('./lib/index.js', updatedContent);
}

add();
"use strict";
const fs = require("fs");

let text;

try {
    const file = process.argv[2];
    text = fs.readFileSync(file).toString().trim();
} catch(e) {
    console.error("Failed to load file.");
}

text = text
    .replace(/([^,]+,[^,]+).*/g, "$1")
    .replace(/"/g, "")
    .replace(/\n/g, "\\n")
;
const js = 'const datasets = "' + text + '".split("\\n").slice(1).map(line => line.split(","));';
fs.writeFileSync("dataset.js", js);
console.log("File simplified.");

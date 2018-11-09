"use strict";
const fs = require("fs");

let text, updateDate;

try {
    const file = process.argv[2];
    text = fs.readFileSync(file).toString().trim();

    updateDate = file.split("_")[2];
    if(!/^20\d{6}$/.test(updateDate)) updateDate = "";
} catch(e) {
    console.error("Failed to load file.");
}

text = text
    .replace(/([^,]+,[^,]+).*/g, "$1")  // 只留前兩個欄位（但若是字串中有其他逗點，就會出錯）
    .replace(/"/g, "")  // 拿掉雙引號
    .replace(/\n/g, "\\n\\\n") // 把「換行字元」替換成「跳脫後的換行字元、跳脫字元、換行字元」，以利輸出後仍易於讀取。
;
const js = 'const updateDate = "' + updateDate + '";\n'
    + 'const datasets = "' + text + '".split("\\n").slice(1).map(line => line.split(","));';
fs.writeFileSync("dataset.js", js);
console.log("File simplified.");

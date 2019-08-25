const path = require('path');
// @TODO update require. when we export this method - we can connect it from index.js
const {
  parseDirectoryFiles,
  getHeaders,
} = require('../../../../dist/index.cjs');

const headers = getHeaders('./Starchy_Roots_Tubers.csv');

// I might have to include lines 5-14 insinde of an async function and await it.
// This will become clearer once parseDrectoryFiles is functional.

// @TODO this line is a good idea. For all of our csv parsers
// projects we have a separated folder with files + parser inside.
// we can make a root directory as default inside of `parserDirectoryFiles`
// and change it if passed another variable
const directory = './';

const directoryPath = path.join(__dirname, directory);

parseDirectoryFiles(directoryPath, headers);
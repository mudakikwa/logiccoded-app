/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
const chokidar = require('chokidar');
const lineReader = require('line-reader');

const fs = window.require('fs');

const file = [];

export const watcher = (folder) => {
  chokidar.watch(folder).on('all', (event, path) => {
    if (event === 'change') {
      lineReader.eachLine(path, (line) => {
        console.log(line);
        file.push(line);
        if (line.includes('##')) {
          const position = line.indexOf('##');
          if (position === 0) {
            const newLine = line.substr(2);
            file.push(newLine);
          }
        }
        console.log(file);
      });
      // fs.writeFile(path, 'Hello World!', function (err) {
      //   if (err) return console.log(err);
      //   console.log('Hello World > helloworld.txt');
      // });
    }
  });
};

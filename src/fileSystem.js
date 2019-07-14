// Here I want to put all methods, related to reading data, etc.
// like
import fs from 'fs';
import csvToJson from './CCCSVParser';

const parseDirectoryFiles = (directoryPath, headers) => {
  // passing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
  // handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err)
    }
    // listing all files using forEach
    files.forEach(function (file) {
    // Do whatever you want to do with the file
      console.log(file, typeof file)
      if (file.split('.')[1] === 'csv') {
        csvToJson(directoryPath, file, headers)
      }
    })
  })
}

export {
  parseDirectoryFiles,
}

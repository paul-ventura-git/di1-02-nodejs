var v_fs = require('fs');

// Create a new file
v_fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Se ha creado y guardado el archivo!');
});

// If the flag is "w" for "writing", the specified file is opened for writing.
// If the file does not exist, an empty file is created:
v_fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// Replaces the specified file and content if it exists.
// If the file does not exist, a new file, containing the specified content, will be created:
v_fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Delete files
/*
v_fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});
*/
// Rename files
v_fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});
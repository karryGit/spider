var fs = require('fs');
var download = require('./download');
fs.readFile('./arr.json', 'utf-8', function (error, data) {
    var array = data.split(',');
    array.forEach(function (item, index) {

        download(item, 'db-images', index + '.jpg')
    })
})
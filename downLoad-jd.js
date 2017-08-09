var fs = require('fs');
var download = require('./download');

fs.readFile('./arrJd.json', 'utf-8', function (error, data) {

    var re = /\/\/img\S+\.jpg/g;

    var jdArr = data.match(re)
    var array = jdArr[0].split(',');
    array.forEach(function (item, index) {
        download('https:'+item, 'jd-images', index + '.jpg')
    })
})
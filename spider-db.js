var webpage = require('webpage');
var page = webpage.create();

//设置phantom 编码格式
phantom.outputEncoding = 'utf-8';

//浏览器打印定义
var fs = require('fs');//引入文件系统
// page.onConsoleMessage = function (msg, linNum, sourceId) {
//      console.log('CONSOLE:' + msg)
// }
page.open('https://www.douban.com/', function (status) {
    if (status === 'success') {
        console.log('加载成功')
        page.includeJs('https://unpkg.com/jquery@3.2.1/dist/jquery.js', function () {

            setTimeout(function () {

                var arrString = page.evaluate(function () {
                    var arr = [];
                    $('.video-cover a').each(function (index, element) {

                        var url = $(element).css('backgroundImage').replace('url(','').replace(')','')

                        arr.push(url)
                    })
                    return arr;
                })
                console.log(arrString);
                fs.write('./arr.json', arrString, 'w')
                phantom.exit(0);
            }, 10000)
        })
    } else {
        console.log('加载失败')
        phantom.exit(0);
    }
})
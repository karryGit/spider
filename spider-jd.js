var webpage = require('webpage');
var page = webpage.create();

//设置Phantom编码格式
phantom.outputEncoding ='utf-8';

//浏览器打印
// page.onConsoleMessage = function (msg, linNum, sourceId) {
//     console.log('CONSOLE:' + msg)
// }

var fs = require('fs')//引入文件系统
//打开浏览器
page.open('https://www.jd.com/',function (status) {
    if (status === 'success'){
        console.log('加载成功')
        page.includeJs('https://unpkg.com/jquery@3.2.1/dist/jquery.js',function () {
            setTimeout(function () {
                var arrString = page.evaluate(function () {
                    var arr=[];
                    $('#seckill .sk_item_pic a img').each(function (index,element) {

                        var imgUrl = $(element).attr('src');

                        var re = /\/\/img\S+\.jpg/g;
                        arr.push(imgUrl.match(re));
                    })
                    return arr
                })

                fs.write('./arrJd.json', arrString, 'w')
                phantom.exit(0);
            },10000)
        })
    }else {
        console.log('加载失败')
        phantom.exit(0);
    }
})
/*  ---------------------------------------------------
Template Name: Ashion
Description: Ashion ecommerce template
Author: Colorib
Author URI: https://colorlib.com/
Version: 1.0
Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    var objList = [
        {
            'img': "index.png",
            'name': '25310'
        },
        {
            'img': "index.png",
            'name': '25311'
        },
        {
            'img': "index.png",
            'name': '25312'
        },
        {
            'img': "index.png",
            'name': '25313'
        },
        {
            'img': "index.png",
            'name': '25314'
        },
        {
            'img': "index.png",
            'name': '25315'
        },
        {
            'img': "index.png",
            'name': '25316'
        },
        {
            'img': "index.png",
            'name': '25317'
        },
        {
            'img': "index.png",
            'name': '25318'
        },
        {
            'img': "index.png",
            'name': '25319'
        },
        {
            'img': "index.png",
            'name': '25320'
        },
        {
            'img': "index.png",
            'name': '25321'
        },
    ]

    var url = getParams(window.location.href)
    var page = 1
    if(url.hasOwnProperty("page")){
        page = parseInt(url['page'])
    }
    
    // 每页数量
    var pernum = 12
    var obj = []
    obj = objList.slice((page-1) * pernum, page * pernum);

    for(var i in obj){
        var img = obj[i]['img']

        var name = obj[i]['name']
        // 线上
        var host = "https://web.mclick.top/lp/"
        img = host + name + "/" + img
        var href = host + "index.html?id=" + name

        //本地
        // img = "file:///D:/code/mclick/lp/" + name + "/" + img
        // var href = "file:///D:/code/mclick/lp/index.html?id="+name

        if (i > 1){
           var new_css = 'style="display: none"'
        }
        var html = '<div class="col-lg-3 col-md-6">\n' +
            '                            <div class="product__item">\n' +
            '                                <div class="product__item__pic set-bg" data-setbg="' + img+ '" style="background-image: url(\''+ img +'\');">\n' +
            '                                    <div class="label new" '+ new_css +'>New</div>\n' +
            '                                    <ul class="product__hover">\n' +
            '                                        <li><a href="'+ href +'" class="image-popup" target="_blank" title="在线查看"><span class="arrow_expand"></span></a></li>\n' +
            '                                        <li><a href="https://mclick.top/" target="_blank" title="模板下载"><span class="icon_heart_alt"></span></a></li>\n' +
            // '                                        <li><a href="https://preview.colorlib.com/theme/ashion/shop.html#"><span class="icon_bag_alt"></span></a></li>\n' +
            '                                    </ul>\n' +
            '                                </div>\n' +
            '                                <div class="product__item__text">\n' +
            '                                    <h6><a href="#">No:' + name + '</a></h6>\n' +
            '                                    <div class="rating">\n' +
            '                                        <i class="fa fa-star"></i>\n' +
            '                                        <i class="fa fa-star"></i>\n' +
            '                                        <i class="fa fa-star"></i>\n' +
            '                                        <i class="fa fa-star"></i>\n' +
            '                                        <i class="fa fa-star"></i>\n' +
            '                                    </div>\n' +
            // '                                    <div class="product__price">$ 59.0</div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>'

        $('#product').before(html)
    }

    //分页显示
    var pagenum  = (objList.length % pernum) == 0 ? (objList.length / pernum ) : (objList.length / pernum ) + 1
    var htmlpage = ""
    for(var n=1; n<=pagenum; n++){
        if(n>3){
            break
        }
        var ac = ""
        if(page === n){
            ac = "class='pageactive'"
        }
        htmlpage += '<a href="?page='+n+'" '+ ac +'>'+n+'</a>'
    }
    if(pagenum > 3){
        var ac = ""
        if(page > 3){
            ac = "class='pageactive'"
        }
        var pagenext = page + 1
        htmlpage += '<a href="?page='+pagenext+'"'+ ac +'><i class="fa fa-angle-right"></i></a>'
    }
    $("#pagelist").append(htmlpage)
})(jQuery);

function getParams(url) {
    const pattern = /(\w+)=(\w+)/gi;
    const params = {};
    url.replace(pattern, function(match, key, value) {
        params[key] = value;
    });
    return params;
}

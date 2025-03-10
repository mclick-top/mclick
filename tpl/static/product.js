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

    var obj = [
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
            'name': '3'
        },
        {
            'img': "index.png",
            'name': '4'
        },
    ]

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
        console.log(obj[i]['img'])
        if (i > 1){
           var new_css = 'style="display: none"'
        }
        var html = '<div class="col-lg-3 col-md-6">\n' +
            '                            <div class="product__item">\n' +
            '                                <div class="product__item__pic set-bg" data-setbg="' + img+ '" style="background-image: url(\''+ img +'\');">\n' +
            '                                    <div class="label new" '+ new_css +'>New</div>\n' +
            '                                    <ul class="product__hover">\n' +
            '                                        <li><a href="'+ href +'" class="image-popup" target="_blank"><span class="arrow_expand"></span></a></li>\n' +
            '                                        <li><a href="https://preview.colorlib.com/theme/ashion/shop.html#"><span class="icon_heart_alt"></span></a></li>\n' +
            '                                        <li><a href="https://preview.colorlib.com/theme/ashion/shop.html#"><span class="icon_bag_alt"></span></a></li>\n' +
            '                                    </ul>\n' +
            '                                </div>\n' +
            '                                <div class="product__item__text">\n' +
            '                                    <h6><a href="https://preview.colorlib.com/theme/ashion/shop.html#">No:' + name + '</a></h6>\n' +
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


})(jQuery);

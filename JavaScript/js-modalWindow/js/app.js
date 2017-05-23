/* global $,jQuery,define,document,navigator,
window,clearTimeout,setTimeout,Image:false */


$(function(){

  'use strict';

  $('.js-show-modal').on('click', function() {

    // 画面幅を取得し変数に格納
    var windowWidth = $('.container').width();
    var windowHeight = $('.container').height();

    // コンテンツの高さ、幅を取得し変数に格納する
    var modalWidth = $('.js-modal-target').outerWidth({margin:true});
    var modalHeight = $('.js-modal-target').outerHeight({margin:true});

// コンテンツを真ん中に配置するために、左、上から何ピクセル話せばいいか計算
    var pxleft = (windowWidth - modalWidth) /2;
    var pxtop = (windowHeight - modalHeight) /2;

    $(".js-modal-content").css({"left": pxleft + "px"});

    $(".js-modal-content").css({"top": pxtop + "px"});



    //   $('.js-modal-target').attr('style',
    //   'margin-left: ' + (windowWidth/2 - modalWidth/2) + 'px');
    //   $('.js-modal-target').show();
    //   $('.js-show-modal-cover').show();
    // });

    $('.js-hide-modal').on('click', function(){
      console.log("押されたで");
      $('.js-modal-target').hide();
      $('.js-show-modal-cover').hide();
    });



  }); //全体の閉じ

/* global $,jQuery,define,document,navigator,
window,clearTimeout,setTimeout,Image:false */


$(function(){

  'use strict';

  $('.js-show-modal').on('click', function() {


    var modalWidth = $('.js-modal-target').width();
    var windowWidth = $('.container').width();



    $('.js-modal-target').attr('style',
    'margin-left: ' + (windowWidth/2 - modalWidth/2) + 'px');
    $('.js-modal-target').show();
    $('.js-show-modal-cover').show();
  });

  $('.js-hide-modal').on('click', function(){
    console.log("押されたで");
    $('.js-modal-target').hide();
    $('.js-show-modal-cover').hide();
  });



}); //全体の閉じ

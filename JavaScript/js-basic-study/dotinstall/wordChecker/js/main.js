
(function(){
  "use strict";
var comment = document.getElementById('comment');
var label   = document.getElementById('label');

var LIMIT = 20;

// 文字数が0より小さい時警告する
var WARNING = 10;

// 要素のhtmlを変更する
label.innerHTML = LIMIT;

// キーを押すたびに要素を取得する
comment.addEventListener('keyup', function(){
  var remaining = LIMIT - this.value.length;
  label.innerHTML = remaining;

// if(remaining < WARNING){
//   label.className = 'warning';
// }else {
//     label.className = '';
// }
// 三項演算子
  label.className = remaining < WARNING ? 'warning': '';

});

})();

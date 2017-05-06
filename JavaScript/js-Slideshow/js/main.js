// 即時関数を使う
(function() {
    'use strict';
    //画像を配列で用意する
    var files = [
        'images/food0.png',
        'images/food1.png',
        'images/food2.png',
        'images/food3.png'
    ];

    var currentNum = 0; //初期化
    var prev = document.getElementById('prev'); //要素の取得
    var next = document.getElementById('next');
    var target = document.getElementById('target');
    var thumnails = document.getElementById('thumnails');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var timer;

// 定数化
    var SLIDESHOW_DURATION = 1500;
    var CLASS_CURRENT = 'current';
    var CLASS_HIDDEN = 'hidden';
    var CLASS_NONE = '';


    // 画像リストの生成
    function createThumnails() {
        var i;
        var li;
        var img;
        for (i = 0; i < files.length; i++) { //ファイル分の処理
            li = document.createElement('li');
            // li.setAttribute('data-index', i); //変数iにdata属性を追加
            li.dataset.index = i; //HTML5のデータ属性を変える

            li.addEventListener('click', function() {

                target.src = this.children[0].src; //クリックした中身のli要素を取得
                thumnails.children[currentNum].className = '';
                currentNum = this.dataset.index; //クリックした要素の番号を取得
                this.className = CLASS_CURRENT;
            });

            img = document.createElement('img');
            img.src = files[i]; //配列の中のsrc属性を取得
            li.appendChild(img); //liにimgを追加
            thumnails.appendChild(li);　 //ul要素のあとにli要素を追加する
        }
    }
    //画像再生機能
    function playSlideshow() {
        timer = setTimeout(function() {
            next.click(); // 64行目と同じ処理（省略）
            playSlideshow();
        }, SLIDESHOW_DURATION);
    }

    createThumnails(); //関数の実行

    thumnails.children[currentNum].className = CLASS_CURRENT; //取得した要素にcurrentクラスを付与

    prev.addEventListener('click', function() {
        thumnails.children[currentNum].className = ''; //currentクラスを空にする
        currentNum--; //現在から１引いた画像を取得
        if (currentNum < 0) { //変数が０より小さい時は3に設定する
            currentNum = files.length - 1; //3
        }
        target.src = files[currentNum]; // targetのソース属性を取得する
        thumnails.children[currentNum].className = CLASS_CURRENT; //currentクラスを追加する
    });

    next.addEventListener('click', function() {
        thumnails.children[currentNum].className = ''; //currentクラスを空にする
        currentNum++; //現在から１足した画像を取得
        if (currentNum > files.length - 1) { //変数が3を超えたら０に設定する
            currentNum = 0;
        }
        target.src = files[currentNum];　 // targetのソース属性を取得する
        thumnails.children[currentNum].className = CLASS_CURRENT; //currentクラスを追加する
    });

    play.addEventListener('click', function() { //再生ボタンを押した時実行
        playSlideshow();
        console.log('再生中');
        this.className = CLASS_HIDDEN; //クラス要素を非表示にする
        pause.className = CLASS_NONE;
    });

    pause.addEventListener('click', function() { //再生ボタンを押した時実行
        clearTimeout(timer); //setTimeoutで帰ってくるタイマーid
        console.log('停止中');
        this.className = CLASS_HIDDEN;
        play.className = CLASS_NONE; //playはクラスが空になる
    });



}()); //良い書き方

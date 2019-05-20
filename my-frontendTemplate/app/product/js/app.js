'use strict';

jQuery(document).ready(function ($) {

	//menuボタンの開閉
	$('.js-l-header-navmenu').click(function () {
		$(this).toggleClass('active'); // activeクラスの付与
		$('.header-logo').fadeToggle();
		$('.header-globalNav').fadeToggle();
		return false;
	});



	// メインビジュアル・クロスフェード
	$('.slideshow').bxSlider({
		auto: true,
		pause:5000,
		speed:4000,
		mode: 'fade',
		stopAuto: false,
		startSlide: 0,
		pager: false,
		controls: false,
		infiniteLoop: true
	});

	//インスタグラム・スライドショー
	$('.slider').slick({
		// アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
		accessibility: true,
		// 自動再生。trueで自動再生される。
		autoplay: true,
		// 自動再生で切り替えをする時間
		autoplaySpeed: 1000,
		// 自動再生や左右の矢印でスライドするスピード
		speed: 5000,
		// 各画像（セル）の基準位置。デフォルトはcenter。
		cellAlign: 'left',
		// trueでラッパー内に収まるようにスライド　
		contain: true,

		wrapAround: true,
		// 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
		pauseOnHover: true,
		// 自動再生時にドットにマウスオンで一時停止するかどうか
		pauseOnDotsHover: true,
		// 画像下のドット（ページ送り）を表示
		dots: false,
		// ドットのclass名をつける
		dotsClass: 'dot-class',
		// ドラッグができるかどうか
		draggable: true,
		// 切り替え時のフェードイン設定。trueでon
		fade: false,
		// 左右の次へ、前へボタンを表示するかどうか
		arrows: false,
		// 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
		infinite: true,
		// 最初のスライダーの位置
		initialSlide: 0,
		// スライドのエリアに画像がいくつ表示されるかを指定
		slidesToShow: 4,
		// 一度にスライドする数
		slidesToScroll: 1,
		// タッチスワイプに対応するかどうか
		swipe: true,
		// 縦方向へのスライド
		vertical: false,
		// 表示中の画像を中央へ
		// centerMode: true,
		// 中央のpadding
		centerPadding: '160px'
	});

});
















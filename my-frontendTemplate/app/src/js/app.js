'use strict';

$(function () {
	// ハンバーガーメニューの開閉
	$('.js-l-header-navmenu').click(function () {
		$(this).toggleClass('active'); // activeクラスの付与
		$('.header-nav').fadeToggle(); // クラスの付与/削除
		return false;
	});

	$('.slideshow').bxSlider({
		auto: true,
		speed: 700,
		controls: false,
		pager: false,
		nextText: false,
		prevText: false
	});

	//レスポンシブ時の画像切り替え
	$(function() {
		// 置換の対象とするclass属性。
		var $elem = $('.js-imageSwitch');
		// 置換の対象とするsrc属性の末尾の文字列。
		var sp = '_sp.';
		var pc = '_pc.';
		// 画像を切り替えるウィンドウサイズ。
		var replaceWidth = 640;

		function imageSwitch() {
			// ウィンドウサイズを取得する。
			var windowWidth = parseInt($(window).width());

			// ページ内にあるすべての`.js-image-switch`に適応される。
			$elem.each(function() {
				var $this = $(this);
				// ウィンドウサイズが768px以上であれば_spを_pcに置換する。
				if(windowWidth >= replaceWidth) {
					$this.attr('src', $this.attr('src').replace(sp, pc));

					// ウィンドウサイズが768px未満であれば_pcを_spに置換する。
				} else {
					$this.attr('src', $this.attr('src').replace(pc, sp));
				}
			});
		}
		imageSwitch();

		// 動的なリサイズは操作後0.2秒経ってから処理を実行する。
		var resizeTimer;
		$(window).on('resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				imageSwitch();
			}, 100);
		});
	});


});
















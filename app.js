$(function () {

  // $(".toggle_btn").on("click", function () {
  //   if ($('#header').hasClass('open')) {
  //     $('#header').removeClass('open');
  //   } else {
  //     $('#header').addClass('open');
  //   }
  // });


  // $("#mask").on("click", function () {
  //   $('#header').removeClass('open');
  // });


  // $("#navi a").on("click", function () {
  //   $('#header').removeClass('open');
  // });


  // カスタマイズ可能
  // autoplay	true/false	自動再生
  // dots	true/false	ドット状のナビを表示
  // arrows	true/false	前/次にスライドを切り替える矢印
  // slidesToShow	1	表示するスライド数
  // slidesToScroll	1	1回で動くスライド数

  // https://kenwheeler.github.io/slick/
  // のサイトからほぼコピペで実装可
  // CSSは修正する必要ありそう

  // $('.slick-area').slick({
  //   arrows: false,
  //   centerMode: true,
  //   centerPadding: '100px',
  //   slidesToShow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         centerPadding: '50px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

  // フェードインの実装
  // ここではfadeIn()メソッドは使わず、
  // スクロールの高さが画像の高さに達したときに
  // CSSで表示させるような記述

  // $(window).scroll(function () {
  //   $('.fadein').each(function () {
  //     //これはおそらくスクロールでギリギリ見えている高さ
  //     let scroll = $(window).scrollTop();
  //     // これはこの要素の高さ
  //     let target = $(this).offset().top;
  //     // これは画面の高さ
  //     let windowHeight = $(window).height();

  //     // 表示された高さが、要素の高さ - 画面の高さ + バッファ？200
  //     // よりも大きくなったときに表示させる
  //     if (scroll > target - windowHeight + 200) {
  //       $(this).css('opacity', '1');
  //       $(this).css('transform', 'translateY(0)');
  //     }
  //   });
  // });

});

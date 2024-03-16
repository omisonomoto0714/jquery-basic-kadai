
//HTMLを読み込みが完了したときコンソールに出力
$(window).on('load', function () {
  console.log('loadイベントが発生しました');
});

$(function () {
  //スクロールされたとき
  $(window).on('scroll', function () {
    console.log('scrollイベントが発生しました');
  });
});
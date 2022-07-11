$(function(){
    //drawer.js
    $('.drawer').drawer()
    //スムーススクロール
    $('a[href^="#"]').click(function() {
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = $("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        $("html, body").animate(
          {
            scrollTop: position - $('#js-header').outerHeight()
         },
          speed
        );
        return false;
      });
      //wow.js
      new WOW().init()
})
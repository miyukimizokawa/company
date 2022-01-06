// ハンバーガーメニュー


$(function(){
  var imgHeight = $('.kv-wrapper').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.mv').outerHeight(); //ファーストビューの高さを取得
  

  $(".burger-btn").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
      //ハンバーガーボタンがfvより上にあるとき
      $('.bar').toggleClass('cross'); //ハンバーガーボタンのラインをクロスさせるCSSを当てたり外したりする
      $('.header-nav').toggleClass('open'); //ナビゲーションが開くCSSを当てたり外したりする
      $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
      $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
    }else{
      //ハンバーガーボタンがfvより下にあるとき
      $(this).toggleClass('black'); //ハンバーガーボタンを黒くしたり白くしたりする
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });


// スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight -50) {
       //メインビジュアル内にいるので、クラスを外す。
       $('.site-title').removeClass('black');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       $('.site-title').addClass('black');
     }

     if ($(window).scrollTop() < bgHeight -70) {
       //メインビジュアル内にいるので、クラスを外す。
       $('.burger-btn').removeClass('black');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       $('.burger-btn').addClass('black');
     }
  });

  $(window).on('scroll load', function(){        /* ページロード時、またはスクロールされた時*/
    var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
    var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
    $('.fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
      var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
      if(scroll > cntPos - windowHeight + windowHeight / 3){  /* 要素がある位置までスクロールされていたら */
        $(this).addClass('active');              /* 「active」のクラスを付与 */
      }
    });
  });




});
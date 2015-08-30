! function()
{
  var b = {
      index: $("#index"),
      room: $('#room'),
      loading: $('#loading'),
      dialog: $('#dialog'),
      play: $('.btn-play')
    },
    ua = window.navigator.userAgent.toLowerCase(),
    isAndroid = /android/i.text(ua),
    isIOS = /iphone|ipad|ipod/i.text(ua),
    app = {
      init: function()
        {
          this.initEvent();
          this.loading();
        },
      loading: function()
      {
        app.render();
        },
        render: function()
          {
            setTimeout(function()
            {
              b.loading.hide(), b.index.show();
            }, 1000);
          },
          initEvent: function()
          {
            //判断是否是移动设备
            var clickEvent = "ontouchstart" in document.documentElement ? "touchstart" : 'click',
              myApp = this,
              b.play.on(clickEvent, function()
              {
                var type = $(this).data("type") || "color";
                b.index.hide(), Game.init(type, b.room, myApp);
              });
          }
      }
    };
  app.init();
  window.API = {};

}();
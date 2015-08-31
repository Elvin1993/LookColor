! function() {
    var b = {
            index: $("#index"),
            room: $('#room'),
            loading: $('#loading'),
            dialog: $('#dialog'),
            play: $('.btn-play')
        },
        ua = window.navigator.userAgent.toLowerCase(),
        isAndroid = /android/i.test(ua),
        isIOS = /iphone|ipad|ipod/i.test(ua),
        app = {
            init: function() {
                console.log('init');
                this.initEvent();
                this.loading();
            },
            loading: function() {
                console.info('loading');
                app.render();
            },
            render: function() {
                console.info('render');
                setTimeout(function() {
                    b.loading.hide(), b.index.show();
                }, 1000);
            },
            initEvent: function() {
                //判断是否是移动设备
                var clickEvent = "ontouchstart" in document.documentElement ? "touchstart" : 'click',
                    myApp = this;
                b.play.on(clickEvent, function() {
                    var type = $(this).data("type") || "color";
                    b.index.hide();
                    Game.init(type, b.room, myApp);
                });
            }
        };
    app.init();
    window.API = {};

}();

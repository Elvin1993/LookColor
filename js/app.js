! function() {
    var b = {
            index: $("#index"),
            room: $('#room'),
            loading: $('#loading'),
            play: $('.btn-play')
        },
        ua = window.navigator.userAgent.toLowerCase(),
        isAndroid = /android/i.test(ua),
        isIOS = /iphone|ipad|ipod/i.test(ua),
        app = {
            init: function() {
                //��ʼ�� ��Ϸ��ʼ�¼�
                this.initEvent();
                this.loading();
            },
            loading: function() {
                app.render();
            },
            //���ؼ��ؽ��� �� ��ʾ��Ϸ��ҳ
            render: function() {
                setTimeout(function() {
                    b.loading.hide(), b.index.show();
                }, 200);
            },
            initEvent: function() {
                //�ж��Ƿ����ƶ��豸
                var clickEvent = "ontouchstart" in document.documentElement ? "touchstart" : 'click',
                    myApp = this;
                //�����ʼ��ť֮���ʼ����Ϸ
                b.play.on(clickEvent, function() {
                    var type = $(this).data("type") || "color1";
                    b.index.hide();
                    Game.init(type, b.room, myApp);
                });
            }
        };
    app.init();
    window.API = {};

}();

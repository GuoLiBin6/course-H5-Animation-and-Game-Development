
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    sprite2:null,
    ball:null,
    circle :{
        angle:0
    },
    ctor:function () {
        this._super();
        this.scheduleUpdate();

        //背景
        this.sprite = new cc.Sprite(res.bj1_jpg);
        this.sprite.attr({
            x: cc.winSize.width/2,
            y: cc.winSize.height / 2
        });
        this.addChild(this.sprite, 0);
        //飞机



        return true;
    },
    update : function () {
        this.removeChild(this.sprite2);
        this.sprite2 = new cc.Sprite(res.plane_png);
        this.sprite2.attr({
            x: cc.winSize.width/2 + Math.cos(this.circle.angle) * 125,
            y: cc.winSize.height/2 + Math.sin(this.circle.angle) * 125
        });
        this.addChild(this.sprite2, 0);
        this.circle.angle += 0.05;


    }

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});




var MainLayer = cc.Layer.extend({
    sprite:null,
    arr:[],
    plane:null,
    scoreLabel:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //两个背景
        var bg1 = new cc.Sprite(res.bg_png);
        bg1.x = size.width/2;
        bg1.y = size.height/2;
        this.addChild(bg1);
        this.arr[0] = bg1;

        var bg2 = new cc.Sprite(res.bg_png);
        bg2.x = size.width/2;
        bg2.y = size.height/2 + bg1.getBoundingBox().height;
        this.addChild(bg2);
        this.arr[1] = bg2;

        //飞机精灵
        this.sprite = new cc.Sprite(res.p_png);
        this.sprite.x = size.width/2;
        this.sprite.y = size.height/3;
        this.addChild(this.sprite);

        //背景滚动计时器
        this.schedule(this.bgScroll);




        return true;
    },
    bgScroll:function(dt){
        for(var i in this.arr){
            this.arr[i].y-=2;
            if(this.arr[i].y<= -720){
                this.arr[i].y +=2*1440;
            }
        }
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});


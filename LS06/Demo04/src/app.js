
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    speed:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;


        var layerColor = new cc.LayerColor(cc.color.GREEN,100,100);
        layerColor.ignoreAnchor = false;
        layerColor.x = 51;
        layerColor.y = size.height/2;
        this.box = layerColor;
        this.addChild(layerColor);

        var layerColor2 = new cc.LayerColor(cc.color.GREEN,50,50);
        layerColor2.ignoreAnchor = false;
        layerColor2.x = size.width/2;
        layerColor2.y = 500;
        this.box2 = layerColor2;
        this.addChild(layerColor2);

        this.scheduleUpdate();
        this.schedule(this.myCallback,0.016,cc.REPEAT_FOREVER,0);

        return true;
    },
    update:function (dt){
         // cc.log(dt);


    },
    myCallback:function(){
        // this.box.x+=10;
        // if(this.box.x>400){
        //     this.unschedule(this.myCallback);
        // }
        this.box2.y -= this.speed;

        if(this.box2.y<0){
            this.speed = -this.speed;
        }else{
            this.speed+=0.3;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


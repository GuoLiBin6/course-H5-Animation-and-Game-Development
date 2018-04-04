
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;

        var colorLayer = new cc.LayerColor(cc.color.RED,100,100);
        colorLayer.ignoreAnchor = false;
        colorLayer.y = size.height/2;
        colorLayer.x = size.width/2;


        var colorLayer2 = new cc.LayerColor(cc.color.GREEN,100,100);
        colorLayer2.ignoreAnchor = false;
        colorLayer2.y = size.height/2;
        colorLayer2.x = size.width/2;

        //设置锚点
        colorLayer.setAnchorPoint(0,0);
        colorLayer2.setAnchorPoint(1,1);

        //旋转
        colorLayer.rotation = 45;
        //缩放
        colorLayer2.scale = 0.5;
        colorLayer.setScale(0.5,0.2);

        this.addChild(colorLayer);
        this.addChild(colorLayer2);

        var img = new cc.Sprite(res.HelloWorld_png);
        img.setAnchorPoint(1,1);
        img.x = size.width-100;
        img.y = size.height-100;
        this.addChild(img);

        cc.log(img.getPositionX());

        var point = colorLayer.convertToNodeSpace(img.getPosition());
        cc.log(point.x);




        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


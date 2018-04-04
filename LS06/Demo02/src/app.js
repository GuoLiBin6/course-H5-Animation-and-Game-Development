
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
        this.addChild(colorLayer);

        var colorLayer2 = new cc.LayerColor(cc.color.GREEN,100,100);
        colorLayer2.ignoreAnchor = false;
        colorLayer2.y = size.height/2;
        colorLayer2.x = size.width/4;
        // colorLayer2.setName('haha');
        this.addChild(colorLayer2);
        cc.log(colorLayer2.getPositionX());
        cc.log(colorLayer2.get)

        // this.getChildByName('haha').y+=100;
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


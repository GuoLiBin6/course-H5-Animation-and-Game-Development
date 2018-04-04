
var OverLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();


        var size = cc.winSize;



        return true;
    }
});

var OverScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});


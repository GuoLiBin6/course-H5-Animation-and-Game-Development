
var MinLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var color = new cc.LayerColor(cc.color.GRAY);
        this.addChild(color);

        var size = cc.winSize;
        var label = new cc.LabelTTF('第一个场景','',50);
        label.x = size.width/2;
        label.y = size.height/3;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont('跳转结束场景',function(){
            cc.director.runScene(new OverScene());

        },this);

        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menu.x =200;
        menu.y =20;
        this.addChild(menu);
    }
});

var MinScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MinLayer();
        this.addChild(layer);
    }
});


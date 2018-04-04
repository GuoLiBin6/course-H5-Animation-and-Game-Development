
var HelloWorldLayer = cc.Layer.extend({
    scene:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.scene = new SetScene();

        var btn = new cc.MenuItemFont('设置',function(){
            cc.director.pushScene(this.scene);
        },this);
        var menu1 = new cc. Menu(btn);
        this.addChild(menu1);



        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


var SetLayer = cc.Layer.extend({
    scene:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.scene = new SetScene();

        var btn = new cc.MenuItemFont('返回',function(){
            cc.director.popScene(this.scene);
        },this);
        var menu1 = new cc.Menu(btn);
        this.addChild(menu1);


        return true;
    }
});

var SetScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new SetLayer();
        this.addChild(layer);
    }
});




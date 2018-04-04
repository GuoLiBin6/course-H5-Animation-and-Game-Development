
var StartLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var labelStart = new cc.LabelTTF('开 始',"",30);
        labelStart.setFontFillColor(cc.color.RED);
        labelStart.enableStroke(cc.color.GREEN,5);

        var itemStart = new cc.MenuItemLabel(labelStart,function(){
            cc.director.runScene(new MainScene());
        },this);

        var menuStart = new cc.Menu(itemStart);
        menuStart.y = size.height/3;
        this.addChild(menuStart);

        var title = new cc.LabelTTF('躲避飞机',"",30);
        title.setFontFillColor(cc.color.RED);
        title.enableStroke(cc.color.YELLOW,3);
        title.x = size.width/2;
        title.y = size.height/3*2;
        this.addChild(title);

        return true;
    }
});

var StartScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});


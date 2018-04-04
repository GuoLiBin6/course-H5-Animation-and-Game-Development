
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.x = 300;
        this.sprite.y = 200;
        this.addChild(this.sprite);

        var spri = new cc.Sprite(res.HelloWorld_png);
        spri.x = 300;
        spri.y = 600;
        this.addChild(spri);

        var item = new cc.MenuItemFont('移动',function(){
            spri.y -= 2;
            var rect = this.sprite.getBoundingBox();
            if(cc.rectContainsPoint(rect,spri.getPosition())){
                cc.log('boom');
            }
        },this);

        var menu = new cc.Menu(item);
        menu.x = size.width-50;
        menu.y = size.height-20;
        this.addChild(menu);


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


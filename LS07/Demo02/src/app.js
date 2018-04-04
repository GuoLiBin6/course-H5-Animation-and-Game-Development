
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

        var startMenuItem = new cc.MenuItemFont('开始',function(){
            cc.log('开始按钮点击了');
        },this);
        var setMenuItem = new cc.MenuItemFont('设置',function(){
            cc.log('设置按钮点击了');
        },this);


        // setMenuItem.setColor(cc.color.RED);

        // var menu = new cc.Menu(startMenuItem,setMenuItem);
        // menu.alignItemsHorizontally();
        // menu.alignItemsHorizontallyWithPadding(size.width*0.2);
        // menu.x = size.width/3;
        // menu.y = size.height/2;
        // this.addChild(menu);

        var toggle = new cc.MenuItemToggle(startMenuItem,setMenuItem,function(){},this);
        var menu2 = new cc.Menu(toggle);
        this.addChild(menu2);
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


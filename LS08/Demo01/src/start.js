
var StartLayer = cc.Layer.extend({
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
        var helloLabel = new cc.LabelTTF("start", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        //场景跳转按钮
        var menuItem = new cc.MenuItemFont('跳转主场景',function(){
            // cc.director.runScene(new MinScene());
            cc.director.runScene(new cc.TransitionJumpZoom(2,new MinScene()));

        },this);

        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menu.x =100;
        menu.y =20;
        this.addChild(menu);

        //渐进层
        var gradient = new cc.LayerGradient(cc.color.RED,new cc.Color(0,0,255),cc.p(0,-1)
            // [{p:0, color: cc.color.RED},
            //     {p:.5, color: new cc.Color(0,0,0,0)},
            //     {p:1, color: cc.color.GREEN}]
        );
        gradient.x = 200;
        gradient.y = 200;
        gradient.width = 200;
        gradient.height = 200;
        this.addChild(gradient);

        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});


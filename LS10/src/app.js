
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));


        //
        for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x = size.width/2;
            this.sprites[i].y = size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }
        //
        // // var actionl = new cc.Place(200,size.height*(0.3*2+0.2));
        // // this.sprites[0].runAction(actionl);
        // this.sprites[0].runAction(cc.flipY(true));
        // // this.sprites[1].runAction(cc.moveBy(10,200,200));
        // this.sprites[1].runAction(cc.moveTo(10,200,200));
        //
        // this.sprites[2].runAction(cc.jumpTo(2,200,200,50,5));
        // this.sprites[2].runAction(cc.scaleTo(2,2,2));

        //帧动画
        // var animation = new cc.Animation();
        // for(var i=1;i<=14;i++){
        //     var frameName = "res/Animation/grossini_dance_0"+i+".png";
        //     animation.addSpriteFrameWithFile(frameName);
        // }
        // animation.setDelayPerUnit(1/10);
        // animation.setRestoreOriginalFrame(true);
        // var action = cc.animate(animation);
        // this.sprites[0].runAction(action.repeatForever());

        cc.spriteFrameCache.addSpriteFrames(res.run_plist);
        var spriteFrames = [];
        for(var i = 1; i<=14; i++){
            var frame = cc.spriteFrameCache.getSpriteFrame(
            "#Run" + i +".png");
            spriteFrames.push(frame);
        }
        var animation2 = new cc.Animation(spriteFrames, 0.2, 2);
        var animate = cc.animate(animation2);
        animation2.setRestoreOriginalFrame(true);
        this.sprites[2].runAction(animate.repeatForever());









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


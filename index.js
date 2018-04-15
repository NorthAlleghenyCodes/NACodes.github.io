$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to(".headimg",3,{opacity:1,y:0,delay:.75,ease:Power2.easeOut});
    var ourScene = new ScrollMagic.Scene({
        triggerElement:".title",
        triggerHook:0.6,
        reverse:false


    })
    .setTween(tween)

    .addTo(controller);
    var tween2 = TweenMax.to(".top-button",3,{opacity:1,y:-35,delay:1.75,ease:Power2.easeOut});
    var ourScene2 = new ScrollMagic.Scene({
        triggerElement:".headimg",
        triggerHook:0.6,
        reverse:false


    })
    .setTween(tween2)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: ".section",
        triggerHook: 0.95
    })

    .setClassToggle('.section', 'bounceInDown')
    .addTo(controller);
});

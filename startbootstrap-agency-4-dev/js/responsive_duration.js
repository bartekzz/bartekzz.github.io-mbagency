$(document).ready(function() {
    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween = TweenMax.to("#readmore_button", 0.5, {scale: 1.3, repeat: 5, yoyo: true});

    // build scene and set duration to window height
    var scene = new ScrollMagic.Scene({triggerElement: "#responsive_duration_trigger", duration: "100%"})
        .setTween(tween)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

});
$(document).ready(function() {

    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#velocity_animation_trigger"})
    // trigger a velocity opaticy animation
        .setVelocity("#readmore_button", {opacity: 0}, {duration: 400})
        .addTo(controller);

});
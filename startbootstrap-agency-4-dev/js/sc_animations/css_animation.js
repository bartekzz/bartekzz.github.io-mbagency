$(document).ready(function() {
    // init controller
    var controller = new ScrollMagic.Controller();

// build scene
    var animateElem = document.getElementsByClassName("team-member_animation");
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 100})
        .on("enter", function () {
            // trigger animation by changing inline style.
            animateElem[0].style.height = "250px";
            animateElem[0].style.width = "250px";
        })
        .on("leave", function () {
            // reset style
            animateElem[0].style.height = "225px";
            animateElem[0].style.width = "225px";
        })
        .addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 100})
        .on("enter", function () {
            // trigger animation by changing inline style.
            animateElem[1].style.height = "250px";
            animateElem[1].style.width = "250px";
        })
        .on("leave", function () {
            // reset style
            animateElem[1].style.height = "225px";
            animateElem[1].style.width = "225px";
        })
        .addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 100})
        .on("enter", function () {
            // trigger animation by changing inline style.
            animateElem[2].style.height = "250px";
            animateElem[2].style.width = "250px";
        })
        .on("leave", function () {
            // reset style
            animateElem[2].style.height = "225px";
            animateElem[2].style.width = "225px";
        })
        .addTo(controller);
});
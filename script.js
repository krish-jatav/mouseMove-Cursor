var main = document.querySelector("#main");
var h1 = document.querySelector("h1");
var circle = document.querySelector("#circle", function() {});
h1.addEventListener("mouseenter", function(dets) {
    circle.style.scale = 2.5;
    console.log("hiii ");
});
h1.addEventListener("mouseleave", function(dets) {
    circle.style.scale = 1;
});
main.addEventListener("mousemove", function(dets) {
    circle.style.left = `${dets.x + 2}px`;
    circle.style.top = `${dets.y - 1}px`;
});
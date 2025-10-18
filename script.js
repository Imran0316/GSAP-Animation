gsap.from("#box1",{
    x:-400,
    y:400,
    duration:3,
    rotation:360,
    backgroundColor:"#ffffffff",
    ease:"bounce.out"
})
gsap.from("#box2", {
  x: 400,
  y: -400,
  duration: 3,
  rotation: 360,
  backgroundColor: "#ffffffff",
  ease: "bounce.out",
});
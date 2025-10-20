// gsap.from("#box1",{
//     x:-400,
//     y:400,
//     duration:3,
//     rotation:360,
//     backgroundColor:"#ffffffff",
//     ease:"bounce.out"
// })
// gsap.from("#box2", {
//   x: 400,
//   y: -400,
//   duration: 3,
//   rotation: 360,
//   backgroundColor: "#ffffffff",
//   ease: "bounce.out",
// });
// gsap.from("h1", {
//   y: 30,
//   duration: 1,
//   Delay: 1,
//   stagger:0.3,
//   opacity: 0
// });
// gsap.from("#box3", {
//   x: 1000,
//   duration: 1,
//   Delay: 1,
//   yoyo:true,
//   repeat:-1,
//   ease: "bounce.out",
// });

// Timeline: 

// var tl = gsap.timeline();

// tl.to("#box1",{
//     x:1100,
//     duration: 1,
//     // rotation:360,
//     delay:1,
//     yoyo:true,
//     repeat: -1,
//     ease: "bounce.out",

// })
// tl.to("#box2", {
//   x: 1100,
//   duration:  1,
// //   rotation: 360,
//   yoyo: true,
//   repeat: -1,
//   ease: "bounce.out",
// });
// tl.to("#box3", {
//   x: 1100,
//   duration:  1,
// //   rotation: 360,
//   yoyo: true,
//   repeat: -1,
//   ease: "bounce.out",
// });

// Timeline on navbar:

var navtime =gsap.timeline();

navtime.from("h2",{
    y:-30,
    duration:1,
    opacity:0,
    delay: 0.5
})
navtime.from("h4",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.3
})
navtime.from("h1",{
    y:20,
    duration:1,
    opacity:0,
    scale:0.2  
})
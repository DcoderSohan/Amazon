var menu = document.querySelector("#nav i")
var close = document.querySelector(".sideMenu i")

var tl = gsap.timeline()

tl.to(".sideMenu",{
    right:0,
    duration:0.8
})

tl.from(".sideMenu ul li",{
    x:150,
    stagger:0.3,
    opacity:0
})

tl.from(".sideMenu i",{
    opacity:0
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

close.addEventListener("click",function(){
    tl.reverse()
})
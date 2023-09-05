const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var chacha = gsap.timeline()
chacha.to("#page1" ,{
    y: "100vh",
    scale: 0.5,
    duration: 0,
    delay: 1,
})
chacha.to("#page1" ,{
    y: "-25",
    duration: 1,
    delay: 1,
})
chacha.to("#page1" ,{
    rotate: 360,
    scale: 1,
    duration: 1,
    delay: 1,
})

document.querySelector("#anda").addEventListener("mouseenter",function(){
    document.querySelector("#anda h1").style. marginLeft= "100px",
    document.querySelector("#anda h1").style.fontSize="30px" ,
    document.querySelector("#anda img").style.transform= "translateX(25%)"
})
document.querySelector("#anda").addEventListener("mouseleave",function(){
    document.querySelector("#anda h1").style. marginLeft= "0px",
    document.querySelector("#anda h1").style.fontSize="50px" ,
    document.querySelector("#anda img").style.transform= "translateX(-145%)"
})

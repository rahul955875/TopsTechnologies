let tl = gsap.timeline()
tl.from(".navbar a",{
    opacity:0,
    y:-50,
    duration:0.5,
    stagger:0.2
})
tl.from(".head-gsap1",{
    opacity:0,
    y:100,
    duration:1,
   stagger:0.2
},"-=0.4")
tl.from(".company-page",{
    opacity:0,
    y:100,
    duration:1
},"-=0.5")

gsap.to(".navbar",{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        start:"top -30%",
        scrub:2
    }
})

gsap.from(".bar-gsap",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".bar-gsap",
        scroller:"body",
        start:"top 20%",
    }
})
gsap.from(".bar-gsap2",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".bar-gsap2",
        scroller:"body",
        start:"top 40%",
        // markers:true
    }
})
gsap.from(".port-gsap",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.2,
    ease:"power1.inOut",
    scrollTrigger:{
        trigger:".port-gsap",
        scroller:"body",
        start:"top 60%",
    }
})
gsap.from(".price-gsap",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".price-gsap",
        scroller:"body",
        start:"top 40%",
    }
})

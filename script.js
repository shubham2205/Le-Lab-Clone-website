var t2=gsap.timeline();
t2
.from("#bold",{
    opacity:0,
    y:-50,
    duration:0.5,
    
})

.from("#h2",{
    opacity:0,
    y:-52,
    duration:0.4,
    // delay:-0.1,
})
.from("#h3",{
    // delay:-0.1,   
    opacity:0,
    y:-54,
    duration:0.3,
})
.from("#h4",{
    // delay:-0.1,
    opacity:0,
    y:-56,
    duration:0.2,
})
.from("#h5",{
    // delay:-0.1,
    opacity:0,
    y:-60,
    duration:0.15,
})
// ------------------------------------------------
gsap.from("#pg2h1",{
    opacity:0,
    x:-200,
    duration:1.2,
    scale:1.1,
})
gsap.to("#pg2h1",{
    scrollTrigger:{
        trigger:"#pg2h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    x:0,
    duration:1.2,
})

gsap.from("#pg2h3",{
    opacity:0,
    x:200,
    duration:1.2,
    scale:1.1,
})
gsap.to("#pg2h3",{
    scrollTrigger:{
        trigger:"#pg2h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    x:0,
    duration:1.2,
})

// ----------------------------------------------------


gsap.from("#pg3text h3",{
    scrollTrigger:{
        trigger:"#pg3text h3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1,
})

gsap.from("#pg3text h1",{
    scrollTrigger:{
        trigger:"#pg3text h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.1,
})
gsap.from("#pg3text p",{
    scrollTrigger:{
        trigger:"#pg3text p",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.2,
})
gsap.from(".buttone1",{
    scrollTrigger:{
        trigger:".buttone1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.4,
})
// ---------------------------------------------
gsap.from("#pg4img",{
    scrollTrigger:{
        trigger:"#pg4img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    delay:0.1,
    opacity:0,
     scale:1.2,
     duration:1.2,
})
gsap.from("#play",{
    scrollTrigger:{
        trigger:"#play",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:0,
     scale:1.1,
     duration:1.2
})
// ----------------------------------------------------
gsap.from("#pg5text h3",{
    scrollTrigger:{
        trigger:"#pg5text h3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1,
})

gsap.from("#pg5text h1",{
    scrollTrigger:{
        trigger:"#pg5text h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.2,
})
gsap.from("#pg5text p",{
    scrollTrigger:{
        trigger:"#pg5text p",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.3,
})
gsap.from(".buttpg5",{
    scrollTrigger:{
        trigger:".buttpg5",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.4,
})
// -----------------------------------------------------
gsap.from("#pg6 img",{
    scrollTrigger:{
        trigger:"#pg6 img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    delay:0.1,
    opacity:0,
    scale:1.2,
    duration:1.4,
})
// ------------------------------------------------------
gsap.from("#pg7text h3",{
    scrollTrigger:{
        trigger:"#pg7text h3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1,
})

gsap.from("#pg7text h1",{
    scrollTrigger:{
        trigger:"#pg7text h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.1,
})
gsap.from("#pg7text p",{
    scrollTrigger:{
        trigger:"#pg7text p",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.2,
})
gsap.from(".butpg7",{
    scrollTrigger:{
        trigger:".butpg7",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:1,
    y:70,
    duration:1.3,
})
// ------------------------------------------
gsap.from("#logosf img",{
    scrollTrigger:{
        trigger:"#logosf img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:0,
    scale:1.5,
    duration:1.2,
    delay:0.1,
})
// ---------------------------------------------
gsap.from(".buttl",{
    scrollTrigger:{
        trigger:".buttl",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:0,
    y:50,
    duration:1.2,
    scale:1.2,
})

gsap.from("#foot img",{
    scrollTrigger:{
        trigger:"#foot img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:0,
    y:50,
    duration:1.2,
    scale:1.2,
})

gsap.from(".last-h6",{
    scrollTrigger:{
        trigger:".last -h6",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    },
    opacity:0,
    y:50,
    duration:1.2,
    scale:1.2,
})

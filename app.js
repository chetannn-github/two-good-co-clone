let tl = gsap.timeline();

tl.from("#main #txt-wrapper h1",{
   
    y:"120%",
    opacity: 0,
    stagger:0.3,
    
    

});

tl.from("#main #video-container video" ,{
    scale:0.8,
    
});

tl.to("#nav #logo #logo-wrapper , #nav #links a",{
    transform: 'translateY(-127%)',
    scrollTrigger:{
        // markers:true,
        trigger:"#txt-wrapper",
        
        scroller:"body",
        
        start:"top -5%",
        end:"top 7%",
        scrub:1

    },

});




tl.from("#product-showcase .product",{
    y:50,
    opacity:0,
    

    scrollTrigger:{
        // markers:true,
        trigger:"#product-showcase .product",
        
        scroller:"body",
        
        start:"top 7%",
        end:"top 8%",
        scrub:1

    },

})

tl.from("#impact #imgs img",{
    y:50,
    opacity:0.85,
    scale:0.95,   

    scrollTrigger:{
        // markers:true,
        trigger:"#impact",
        
        scroller:"body",
        
        start:"top 7%",
        end:"top 8%",
        scrub:2

    },
})



tl.from("#footer svg path",{
   opacity:0,
   stagger:0.4,
   rotate:"10deg",

    scrollTrigger:{
        // markers:true,
        trigger:"#footer",
        
        scroller:"body",
        
        start:"top 4%",
        end:"top 13%",
        scrub:2
        

    },
})

tl.from("#footer #part2 p",{
    y:100,
    opacity:0,
    
    scrollTrigger:{
        //  markers:true,
         trigger:"#footer",
         
         scroller:"body",
         
         start:"top 4%",
         end:"top -10%",
         scrub:2
         
 
     },
 })
 
 
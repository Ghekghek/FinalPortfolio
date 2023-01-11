const space = document.querySelectorAll(".space-container");
const box = document.querySelector(".box");
const mtop = document.querySelectorAll(".mtop");
const bbtn = document.querySelectorAll(".bbtn");
const al = document.querySelectorAll(".al")
const ar = document.querySelectorAll(".ar")
const af = document.querySelectorAll(".af")
const as = document.querySelectorAll(".as")
const c = document.querySelectorAll(".c")
const circles = document.querySelector(".circles")
const circlesTwo = document.querySelector(".circles2")
const item = document.querySelectorAll(".b")
const spaceOne = document.querySelectorAll(".space-container")
const spaceTwo = document.querySelectorAll(".space-container2")
const h= document.querySelectorAll(".h-container")



const tl = new TimelineMax({repeat:-1,});



tl.from(box,0.5,{
    // width:"0%",
    scale:0
});




tl.from(al,0.5,{
    x: -100,
    ease: "Power1.easeInOut",
    opacity: 0,
    duration: 1,
    stagger:2,
},0.5)

tl.from(ar,0.5,{
    x: 100,
    ease: "Power1.easeInOut",
    opacity: 0,
    duration: 1,
    stagger:2,
},0.5)

tl.from(mtop,0.5,{
    y: -100,
    ease: "Power1.easeInOut",
    opacity: 0,
    duration: 1,
    stagger:2,
},1)
tl.from(bbtn,0.5,{
    y: 100,
    ease: "Power1.easeInOut",
    opacity: 0,
    duration: 1,
    stagger:2,
},1)


tl.staggerFrom(af,0.3,{
    scale: 3,
    ease: "Power1.easeInOut",
    opacity: 0,
   stagger:0.5,
   duration: 1,
})
tl.staggerFrom(as,0.3,{
y:100,
opacity: 0,
duration: 0.3,
ease: "Power1.easeInOut",
   stagger:0.3
   
})

tl.staggerFrom(c,0.3,{
y:100,
opacity: 0,
duration: 0.3,
ease: "Power1.easeInOut",
   stagger:0.3
   
})

tl.staggerFrom(item,0.3,{
y:100,
opacity: 0,
duration: 0.3,
ease: "Power1.easeInOut",
   stagger:0.3
   
})





tl.staggerFrom(h,0.3,{
   
    height:"0",
    opacity: 0,
    duration: 0.3,
    ease: "Power1.easeInOut",
       stagger:0.3
       
    })
    
tl.staggerFrom(spaceOne,0.3,{
   
    height:"0",
    opacity: 0,
    duration: 0.3,
    ease: "Power1.easeInOut",
       stagger:0.3
       
    })
    
    
    
tl.staggerFrom(spaceTwo,0.3,{
    
    height:"0",
    opacity: 0,
    duration: 0.3,
    ease: "Power1.easeInOut",
       stagger:0.3
       
    })
    
    
    

tl.to(circles,1,{
    x: -100,
    ease: "Power1.easeInOut",
    repeat:1,
    yoyo:true,
  
})


tl.to(circlesTwo,1,{
    x: -100,
    ease: "Power1.easeInOut",
   repeat:1,
    yoyo:true,
  
})


    


// TweenMax.staggerFrom(space,1,{

// x:-100,
// stagger:0.5,
// repeat:-1,
// yoyo:true,

// })



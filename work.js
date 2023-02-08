let gtl = gsap.timeline({defaults:{ease:"SlowMo.easeOut"}})

// gsap.to(".work-details",{
  
//     duration:8,
//     scrollTrigger:{
//         trigger:".work-details",
//         start:"top 10%",
//         end:"bottom 100%",
    
//         scrub:1,
//         toggleAction:"restart none none none",
//         pin:".work-details",
//         pinSpacing:false,
//         markers:true,
 
//        }
// })

let ghome =  document.querySelector("#ghome")
let gservices =  document.querySelector("#gservices")


    
var isMobile = window.innerWidth <= 500;

if (!isMobile) {
    gsap.to(".work-details",{
  
        duration:8,
        scrollTrigger:{
            trigger:".work-details",
            start:"top 10%",
            end:"bottom 100%",
        
            scrub:1,
            toggleAction:"restart none none none",
            pin:".work-details",
            pinSpacing:false,
            markers:true,
     
           }
    })
  }
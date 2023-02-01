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

let ghome =  document.querySelector("#ghome")
let gservices =  document.querySelector("#gservices")

ghome.addEventListener("click", function(){ 
    
    gsap.from(
        ".homefix-container > *",
        {
          y: 100,
          ease: "Power2.easeInOut",
          opacity: 0,
          duration: 0.8,
          stagger: 0.5,
        }
      );
    gsap.from(
        ".brand-container > *",
        {
          y: 200,
          ease: "Power2.easeInOut",
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
        }
      );
  



}); 


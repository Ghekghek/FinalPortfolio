gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

const designItem = gsap.utils.toArray('.item-wrapper')

// gsap.to(".design-image",{
  
//     duration:8,
//     scrollTrigger:{
//         trigger:".design-image",
//         start:"top 30%",
//         end:".+=4900s",
//         scrub:1,
//         toggleAction:"restart none none none",
//         pin:".design-image",
//         pinSpacing:false,
 
//        }
// })


designItem.forEach(function (item,index) {

 
 
  mm.add({
isMobile:"(max-width:500px)",
isDesktop:"(min-width:500px)"
  },(context) => {
let {isMobile,isDesktop} = context.conditions;

if( index % 2 !== 0){
  TweenMax.to(item,{
   
       x:isDesktop ? -100 : 1,
         duration:0.5,
         scale: isMobile ? 1: 1.2,

         ease:Power1.easeinout,
             scrollTrigger:{
                 trigger:item,
                 start:"top center",
                 end:"bottom center",
                 toggleActions:"restart reverse restart reverse",
                 pinSpacing:false,
                //  markers:true,
                }
       
       
       
       
       
       
         });
     }
else{
TweenMax.to(item,{
   

   duration:0.5,
   scale: isMobile ? 1: 1.2,
   x:isDesktop ? 100 : 0,
   ease:Power1.easeinout,
       scrollTrigger:{
           trigger:item,
           start:"top center",
           end:"bottom center",
           toggleActions:"restart reverse restart reverse",
           pinSpacing:false,
          //  markers:true,
          }
 
 
 
         
          
 
   });
  
 
}
  })
 




  








});
















// gsap.to(".stick1",{

//   opacity:1,
//   duration:0.5,
  
//   y:200,
//   ease:Power4.easein,
//       scrollTrigger:{
//           trigger:".pin1",
//           start:"top 0",
//           end:"bottom 0",
//           toggleActions:"restart none none reverse",
//           pinSpacing:true,
//           markers:true,
//          }

// })
// gsap.to(".stick2",{

//   opacity:1,
//   duration:0.5,
  
//   y:200,
//   ease:Power4.easein,
//       scrollTrigger:{
//           trigger:".pin2",
//           start:"top 30%",
//           end:"bottom 0",
//           toggleActions:"restart none none reverse",
//           pinSpacing:true,
//           markers:true,
//          }

// })
// gsap.to(".stick3",{

//   opacity:1,
//   duration:0.5,
  
//   y:200,
//   ease:Power4.easein,
//       scrollTrigger:{
//           trigger:".pin3",
//           start:"top 0",
//           end:"bottom 0",
//           toggleActions:"restart none none reverse",
//           pinSpacing:true,
//           markers:true,
//          }

// })
// gsap.to(".stick4",{

//   opacity:1,
//   duration:0.5,
  
//   y:200,
//   ease:Power4.easein,
//       scrollTrigger:{
//           trigger:".pin4",
//           start:"top 0",
//           end:"bottom 0",
//           toggleActions:"restart none none reverse",
//           pinSpacing:true,
//           markers:true,
//          }

// })
// gsap.to(".stick5",{

//   opacity:1,
//   duration:0.5,
  
//   y:200,
//   ease:Power4.easein,
//       scrollTrigger:{
//           trigger:".pin5",
//           start:"top 0",
//           end:"bottom 0",
//           toggleActions:"restart none none reverse",
//           pinSpacing:true,
//           markers:true,
//          }

// })
// gsap.to(".stick6",{

//   opacity:1,
//   duration:0.5,
  
//   y:200,
//   ease:Power4.easein,
//       scrollTrigger:{
//           trigger:".pin6",
//           start:"top 0",
//           end:"bottom 0",
//           toggleActions:"restart none none reverse",
//           pinSpacing:true,
//           markers:true,
//          }

// })
// gsap.to(".stick7",{

//   opacity:1,
//   duration:0.5,
  
//   y:200,
//   ease:Power4.easein,
//       scrollTrigger:{
//           trigger:".pin7",
//           start:"top 0",
//           end:"+=500s",
//           toggleActions:"restart none none reverse",
//           pinSpacing:true,
//           markers:true,
//          }

// })



// gsap.to(".square1",{
//  background:"url(img/Group102.png)",

//     duration:8,
//     scrollTrigger:{
//         trigger:".square3",
      
//         scrub:1,
//         start:"top 50%",
//       end:"top 50%",
//         pinSpacing:false,
//         markers:true,
//        }
// })
// gsap.to(".square1",{
  
//     duration:20,
//     scrollTrigger:{
//         trigger:".square3",
//         start:"top 50%",
//         end:".square3",
//         scrub:1,
//         toggleAction:"restart none none none",
//         pin:".square1",
//         pinSpacing:false,
//         markers:true,
//        }
// })
// gsap.to(".square1",{
  
//     duration:20,
//     scrollTrigger:{
//         trigger:".square4",
//         start:"top 50%",
//         end:"+=100",
//         scrub:1,
//         toggleAction:"restart none none none",
//         pin:".square1",
//         pinSpacing:false,
//         markers:true,
//        }
// })
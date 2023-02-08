// gsap.registerPlugin(ScrollTrigger);
// let mm = gsap.matchMedia();

// const designItem = gsap.utils.toArray('.item-wrapper')

// // gsap.to(".design-image",{
  
// //     duration:8,
// //     scrollTrigger:{
// //         trigger:".design-image",
// //         start:"top 30%",
// //         end:".+=4900s",
// //         scrub:1,
// //         toggleAction:"restart none none none",
// //         pin:".design-image",
// //         pinSpacing:false,
 
// //        }
// // })


// designItem.forEach(function (item,index) {

 
 
//   mm.add({
// isMobile:"(max-width:500px)",
// isDesktop:"(min-width:500px)"
//   },(context) => {
// let {isMobile,isDesktop} = context.conditions;

// if( index % 2 !== 0){
//   TweenMax.to(item,{
   
//        x:isDesktop ? -100 : 1,
//          duration:0.5,
//          scale: isMobile ? 1: 1.2,

//          ease:Power1.easeinout,
//              scrollTrigger:{
//                  trigger:item,
//                  start:"top center",
//                  end:"bottom center",
//                  toggleActions:"restart reverse restart reverse",
//                  pinSpacing:false,
//                 //  markers:true,
//                 }
       
       
       
       
       
       
//          });
//      }
// else{
// TweenMax.to(item,{
   

//    duration:0.5,
//    scale: isMobile ? 1: 1.2,
//    x:isDesktop ? 100 : 0,
//    ease:Power1.easeinout,
//        scrollTrigger:{
//            trigger:item,
//            start:"top center",
//            end:"bottom center",
//            toggleActions:"restart reverse restart reverse",
//            pinSpacing:false,
//           //  markers:true,
//           }
 
 
 
         
          
 
//    });
  
 
// }
//   })
 




  








// });






$(window).on('scroll', function(){
  function isScrollIntoView(elem, index) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(window).height()*.5;
    if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
      $(elem).addClass('active');
    }
    if(!(elemBottom <= docViewBottom)) {
      $(elem).removeClass('active');
    }
  }
  var timeline = $('.vertical-scrollable-timeline li');
  Array.from(timeline).forEach(isScrollIntoView);
});
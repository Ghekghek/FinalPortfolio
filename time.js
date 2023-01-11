const displayTime = document.querySelector(".display-time");


function showTime() {
  
    let time = new Date();

    displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false ,hour:'2-digit' ,minute:'2-digit'});
 
    setTimeout(showTime, 1000);
  }
  
  showTime();
  
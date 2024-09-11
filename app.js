
// Store your id's in new variables
let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");
let AMpm = document.getElementById("amPM");


// Set interval which will update after 1 second
setInterval(()=>{
    let currentTime = new Date();

    hr.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    AMpm.innerHTML = (currentTime.getHours()<24?"PM":"AM");
    
},1000)




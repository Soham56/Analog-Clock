const deg = 6;
const hr = document.querySelector(".hour")
const mn = document.querySelector(".mn")
const sc = document.querySelector(".sc")

setInterval(()=>{

    let day = new Date();
    
    let hh = day.getHours() * 30;
    // 30 because there are total 12 hours and total angle is 360deg , so for each hour hour-hand will rotate (360/12)deg = 30deg;
    let mm = day.getMinutes() * 6;
    // 6 because there are total 60 minutes and total angle is 360deg, so for each minutes minutes-hand will rotate (360/60)deg = 6deg;
    let ss = day.getSeconds() * 6;
    // 6 because there are total 60 seconds and total angle is 360deg, so for each seconds seconds-hand will rotate (360/60)deg = 6deg;
    
    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})

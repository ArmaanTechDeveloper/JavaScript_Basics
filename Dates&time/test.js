const clock = document.querySelector('.clock');

let hours = 0;
let mins = 0;
let secs = 0;

let delayInSecs = 1;

const tick = ()=>{
    printTicking(hours , mins , secs)
    console.log('ticking')
    if(secs === 60){
        mins ++;
        secs = 0;
        if(mins === 60){
            hours ++;
            mins = 0;
        }
    }
    else{
        secs ++;
    }
}

setInterval(tick, delayInSecs*1000);

const printTicking = (hours , mins , secs)=>{
    if(hours<10){
        hours = `0${hours}`;
    }
    if(mins<10){
        mins = `0${mins}`;
    }
    if(secs<10){
        secs = `0${secs}`;
    }
    clock.innerHTML = `${hours} : ${mins} : ${secs}`;
}

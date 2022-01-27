const clock = document.querySelector('.clock');

const tick = ()=>{

    const now = new Date();
    let DateToPrint = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;

    clock.innerHTML = DateToPrint;
}

setInterval(tick , 1000);

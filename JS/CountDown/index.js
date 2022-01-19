const clockTitle = document.querySelector(".js-clock");
const christmas = new Date('December 25, 2022 00:00:00');
function getCountDown(){
    const current=new Date();
    const leftTime= christmas-current;
    const totalSeconds=leftTime/1000;
    const seconds= String(Math.floor(totalSeconds%60)).padStart(2,"0");
    const minutes= String(Math.floor(totalSeconds/60)%60).padStart(2,"0");
    const hours= String(Math.floor(totalSeconds/(60*60))%24).padStart(2,"0");
    const days = String(Math.floor(totalSeconds/(60*60*24)));
    clockTitle.innerText=`${days}d ${hours}h ${minutes}m ${seconds}s`;

}

getCountDown();
setInterval(getCountDown,1000);
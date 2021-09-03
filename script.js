const days1 = document.getElementById('days');
const hours1 = document.getElementById('hours');
const mins1 = document.getElementById('minutes');
const secs1 = document.getElementById('seconds');


const bday="8 Sept 2021";

function countdown(){
    const bdaydate = new Date(bday);
    const curdate = new Date();
    const seconds =(bdaydate - curdate)/1000;

    const day=Math.floor(seconds/3600/24);
    const hr=Math.floor(seconds/3600)%24;
    const min =Math.floor(seconds/60)%60;
    const sec=Math.floor(seconds)%60;

    if((day<=0)&&(hr<=0)&&(min<=0)&&(sec<=0))
    {clearInterval(mytimer);
        day=0; hr=0; min=0; sec=0;
       document.getElementById("sur").hidden=true;
        document.getElementById("text").hidden=false;
    }  

    days1.innerHTML = day;
    hours1.innerHTML = formatTime(hr);
    mins1.innerHTML = formatTime(min);
    secs1.innerHTML = formatTime(sec);
    document.getElementById("text").hidden=true;

}

function formatTime(time){
 return (time<10)?`0${time}`: `${time}`;
}

countdown();
var mytimer=setInterval(countdown,1000);


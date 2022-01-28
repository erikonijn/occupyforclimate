date = new Date("Mar 25, 2022 12:00:00").getTime();

function clock(){
    
    now = new Date().getTime();
    text = document.getElementById("countdown");
    
    delta = date - now;
    
    days = Math.floor(delta/(1000*60*60*24));
    hrs = Math.floor((delta % (1000*60*60*24))/(1000*60*60));
    mins = Math.floor((delta % (1000*60*60))/(1000*60));
    sec = Math.floor((delta % (1000*60))/1000);
    
    if(days<10){days = "0"+days};
    if(hrs<10){hrs = "0"+hrs};
    if(mins<10){mins = "0"+mins};
    if(sec<10){sec = "0"+sec};
    
    countdown = (days + " days, " + hrs + ":" + mins + ":" + sec);
    text.innerHTML = countdown;
    
    if (delta < 0) {
        clearInterval(x);
        text.innerHTML = "00:00:00:00";
    }
}

x = setInterval(function(){
    clock();
}, 1000);

clock();
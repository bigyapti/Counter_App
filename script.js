const new_year = '12 nov 2022'

function countdown(){
    const newyeardate= new Date(new_year);
    const currentdate= new Date();
    displaydate = newyeardate - currentdate;
    day = Math.floor(displaydate/1000/3600/24);
    hour = Math.floor((displaydate/1000/3600)%24);
    min = Math.floor((displaydate/1000/60)%60);
    second = Math.floor((displaydate/1000)%60)

    document.getElementById("days").innerHTML=day;
    document.getElementById("hours").innerHTML=hour;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("seconds").innerHTML=second;
}


setInterval(countdown, 1000);


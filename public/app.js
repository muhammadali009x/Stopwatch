var min = 0;
var sec = 0;
var msec = 0, hrs = 0;
var interval;

document.getElementById('stop').disabled =true;
document.getElementById('start').disabled =false;

function start(){
    document.getElementById('start').disabled =true;
    document.getElementById('stop').disabled =false;
    interval = setInterval(function(){
        msec++;
        document.getElementById('msec').innerHTML= "0" + msec;
        
        if(msec>=10)
        {
            document.getElementById('msec').innerHTML= msec;
        }
        if(msec>=100)
        {
            sec++;
            document.getElementById('sec').innerHTML = "0" + sec;
            if(sec>=10)
            {
                document.getElementById('sec').innerHTML= sec;
            }
            msec=0;
            if(sec >= 60){
                min++;
                document.getElementById('min').innerHTML = "0" + min;
                sec = 0;
                if(min>=10){
                    document.getElementById('min').innerHTML = min;
                }
                if(min >= 60){
                    hrs++;
                    document.getElementById('hrs').innerHTML = "0" + hrs;
                    if(hrs>=10){
                        document.getElementById('hrs').innerHTML = hrs;
                    }
                    min=0;
                    if(hrs>=2){
                        hrs = min = sec = msec = 0;
                        document.getElementById('hrs').innerHTML = document.getElementById('min').innerHTML = document.getElementById('sec').innerHTML = document.getElementById('msec').innerHTML = '00';                                            
                    }
                }
            }
        }
        

    }, 10)
}
function pause(){
    document.getElementById('stop').disabled =true;
    document.getElementById('start').disabled =false;
    clearInterval(interval);
}
function reset(){
    hrs = min = sec = msec = 0;
    document.getElementById('hrs').innerHTML = document.getElementById('min').innerHTML = document.getElementById('sec').innerHTML = document.getElementById('msec').innerHTML = '00';
}

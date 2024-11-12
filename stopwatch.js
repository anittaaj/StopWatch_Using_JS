let seconds = 0;
let minutes = 0;
let hours = 0;



let displaySecond = 0;
let displayMinutes = 0;
let displayHours = 0;



let stutus ='Stopped';
let interval = "";

function StartWatch()
{
    seconds++;
    if(seconds/60 === 1)
    {
        seconds=0;
        minutes++;

        if(minutes/60 === 1)
        {
            minutes=0;
            hours++;
        }

    }


    if(seconds < 10)
    {
        displaySecond = 0 + seconds.toString();
    }
    else
    {
        displaySecond = seconds;
    }


    if(minutes < 10)
    {
        displayMinutes = 0 + minutes.toString();
    }
    else
    {
        displayMinutes = minutes;
    }


    if(hours < 10)
    {
        displayHours = 0 + hours.toString();
    }
        else
        {
            displayHours = hours;
        }


    

    document.getElementById('display').innerHTML = displayHours +":"+ displayMinutes + ":" + displaySecond;
}

function startstop()
{
    if (stutus == 'Stopped')
    {
        interval=window.setInterval(StartWatch,1000);
        document.getElementById('handler').innerHTML="Pause";
        stutus="started";

    }
    else if(stutus == 'started')
    {
        window.clearInterval(interval);
        document.getElementById('handler').innerHTML="Start";
        stutus="Stopped";
    }
}


function Reset()
{
    seconds = 0;
    minutes = 0;
    hours = 0;
    window.clearInterval(interval);
    document.getElementById('display').innerHTML = '00:00:00';
    document.getElementById('handler').innerHTML = 'Start';
    stutus="Stopped";
}
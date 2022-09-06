const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const seconds = document.getElementById('seconds');

const newYears = "1 Jan 2022"

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const date = (newYearsDate - currentDate) /1000 ;

    const day = Math.floor( date / 3600 / 24);
    const hour = Math.floor( date / 3600 % 24);
    const minute = Math.floor( date % 3600 / 60);
    const second = Math.floor( date % 60);
    
    days.innerHTML = formatTime(day)
    hours.innerHTML = formatTime(hour)
    mins.innerHTML = formatTime(minute)
    seconds.innerHTML = formatTime(second)

    function formatTime(time){
        return time < 10 ? (`0${time}`) : time ;
    }
}

setInterval(countdown,1000)
countdown()



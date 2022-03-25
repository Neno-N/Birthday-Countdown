console.clear();

/*======= Query Selectors =======*/
const daysStr = document.querySelectorAll('.days-num');
const hoursStr = document.querySelector('.hours-num');
const minutesStr = document.querySelector('.minutes-num');
const secondsStr = document.querySelector('.seconds-num');
/*======= End of Query Selectors =======*/



/*======= Variables =======*/

let year = 2022;

/*======= End of Variables =======*/




/*======= Event Listeners =======*/
let myInterval = setInterval(()=>{
    let date = new Date(year,11,17);
    let dateNow = new Date();
    let x = date - dateNow;
    let dateDays = parseInt(x/86400000);
    let y = dateDays * 86400000;
    x -=y;
    let dateHours = parseInt(x/3600000);
    y = dateHours * 3600000;
    x-=y;
    let dateMinutes = parseInt(x/60000);
    y = dateMinutes * 60000;
    x-=y;
    let dateSeconds = parseInt(x/1000);
    
    if(dateDays === 0 && dateHours === 0 && dateMinutes === 0 && dateSeconds === 0){
       year +=1;
    }



    //Days
    daysStr.forEach(day=>{
        day.innerText = String(dateDays);
    })

    //Hours
    hoursStr.innerText = String(dateHours)

    //Minutes
    minutesStr.innerText = String(dateMinutes);

    //Seconds
    secondsStr.innerText = String(dateSeconds);

},1000);
/*======= End of Event Listeners =======*/
//9. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ convert​ ​ a ​ ​ Unix​ ​ timestamp​ ​ to​ ​ time.

let n=prompt('Enter value');

function time(n){

    let a = new Date(n * 1000);

    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    //days
    let day=days[a.getDay()];
    
    //year
    let year = a.getFullYear();
    
    //month
    let month = months[a.getMonth()];

    //hour  
    let hour = a.getHours();

    //minutes
    let min = a.getMinutes();

    //second
    let sec = a.getSeconds();

    //check if AM or PM
    let ampm = hour >= 12 ? 'PM' : 'AM';

    //gmt time
    let gmt = a.toString().slice(25,33)

    //output
    let time = day + ', ' + month + ' ,' + year + ' ,' + hour + ':' + min + ':' + sec +' '+ ampm + ' ' +gmt;

    return time;
  }
  console.log(time(n));





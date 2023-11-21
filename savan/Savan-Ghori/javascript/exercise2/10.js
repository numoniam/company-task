//10. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​ differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours and​ ​ minutes​ ​ between​ ​ two​ ​ dates.

let fdate=prompt('Enter first date');
let sdate=prompt('Enter second  date');

let a=new Date(fdate);
let b=new Date(sdate);

function savan(a,b)
{
    //date difference
    let date_diff=Math.abs(a-b);

    //days 
    let total_days=Math.round(date_diff/(1000*60*60*24))
    
    //years
    let years=Math.round(total_days/365);

    //months
    let months=(total_days%12)
    let days=Math.round(total_days/365);

    let result= years + ' ' + " years" + ' ' +months + ' ' + "months" + ' '+days + ' '+ "days";
    console.log(result);

    //month
    let tmonths=(years*12) + months;
    let res1="or"  + ' ' +tmonths+' '+"months"+' '+ days + ' '+" Days";
    console.log(res1);

    //week and days
    let tweek=Math.round((((years*12)+months)*30 + days +10)/7);
    let tday=(((years*12)+months)*30 + days +10)%7;
    let re3="or" +tweek+ ' '+ "weeks" + ' '+tday+ ' '+ "days";
    console.log(re3);


    //days
    let td=(((years*12)+months)*30 + days +10);
    let res2="or" + td +' '+"days";
    console.log(res2);

    //hours 
    let thours=(((years*12)+months)*30 + days +10)*24;
    let res4="or" + ' '+thours+' '+ " hours";
    console.log(res4);

    //minutes
    let tmin=((((years*12)+months)*30 + days +10)*24)*60;
    let res5="or"+ ' '+tmin+' '+"minutes";
    
}

savan(a,b);
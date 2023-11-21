//Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​ between​ ​ two​ ​ dates,​ ​ from​ ​ maximum​ ​ unit​ ​ to minimum​ ​ unit.

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

    return result;
    
}

console.log(savan(a,b));

// output example: 1 year 10 months 2 days


let n=prompt('Enter the value')

let array=[0,1,2,3,4,5,6,7,8,9]

function savan(n)
{
    
    document.write(array.slice(0,n));
    document.write('</br>');

    document.write(array.slice(-n));


}
savan(n);

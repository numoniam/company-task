// 1. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.​ ​ Passing​ ​ a parameter​ ​ 'n'​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​ last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array.

let n=prompt('Enter the value')

let array=[0,1,2,3,4,5,6,7,8,9]

function savan(n)
{
    
    document.write(array.slice(0,n));
    document.write('</br>');

    document.write(array.slice(-n));


}
savan(n);

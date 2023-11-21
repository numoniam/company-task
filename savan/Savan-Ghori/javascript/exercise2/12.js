//12. Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​ into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.

let n=+prompt('Enter position');

let str='RapidOpsSolution';

let arr=[];

for(let i=0;i<str.length;i++)
{
    let sub_str=str.slice(i,i+n);
    arr.push(sub_str);
    i+=n-1;
}
console.log(arr);
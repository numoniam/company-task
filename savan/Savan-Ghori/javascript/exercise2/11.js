//11. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).

let str="This is a sample string";

//size
let size=str.length;

let in_str=prompt('Enter string');

let n=prompt('Enter the position',1);

//sub-string
let sub_str=str.slice(0,n);

//last sub-string
let last_str=str.slice(n,size);

//joining all three sub-string
let final= sub_str.concat(in_str,last_str);

console.log(final);



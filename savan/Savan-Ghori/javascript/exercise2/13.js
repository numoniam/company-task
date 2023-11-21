//13. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​ ​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators.


//value take as a number
let number = +prompt('Enter Numner ')

let res = number.toLocaleString("en-US");

document.write(res);
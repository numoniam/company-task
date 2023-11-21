//7. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​ name​ ​ from​ ​ a ​ ​ particular​ ​ date.

//enter date in format of mm/dd/yyyy

let n=prompt('Enter date')

let date =new Date(n)

let m = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

console.log(m[date.getMonth()]);


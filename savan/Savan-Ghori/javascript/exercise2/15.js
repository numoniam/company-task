//15. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​ object​ ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​ position. Also if the position does not exist then error message should be shown to the user.

let dele_position = +prompt('delete object position');

//insert position
let ins_position = +prompt('insert object position');

//insert name
let i_name = prompt(' add new object name');

//insert age
let i_age = prompt(' add new object age');

let arr = [
    { name: "savan", age: 21 },
    { name: "hiren", age: 24 },
    { name: "ravi", age: 25 }
  ]

if (dele_position !== undefined) {

    arr.splice(dele_position, 1);

}
if (ins_position !== undefined) {
    let newObj = {};
    newObj.name = i_name;
    newObj.age = i_age;
    arr.splice(ins_position, 0, newObj)
}

console.log(arr);


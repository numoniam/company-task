//14. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​ ​ array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ ​ of​ ​ age, & descending​ ​ order​ ​ of​ ​ name.​ ​ Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​which are​ ​:

let users = [
    {id:1,name:"savan",Age:18},
    {id:2,name:"het",Age:30},
    {id:3,name:"vivek",Age:26},
    {id:4,name:"anas",Age:23},
    {id:6,name:"malhar",Age:56},
    {id:5,name:"smit",Age:54},
    {id:7,name:"hiren",Age:45},
    {id:8,name:"ravi",Age:36},
    {id:9,name:"sagar",Age:28},
    {id:10,name:"jemish",Age:23},
]

//ascending order
let ascending = () =>{
        users.sort((a,b)=>{
            return a.Age - b.Age
        })
}

//descending order
let descending = () =>{
        users.sort((a,b)=>{
            return b.name.localeCompare(a.name)
        })
}

console.log(ascending());
console.log(users);

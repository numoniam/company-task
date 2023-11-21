let user={
    name:"savan",
    age:30,
    hello(){
       alert(user.name);
    }

};

let admin=user;

console.log(admin.name);
user.hello();
admin.hello();

let user={

    name:"savan",
    age:23,
    id:1,
    sayhi:function(){
        alert(this.name);
    },

    sayhello(){
        alert(this.age);
    }

    
    
};

//  user.a=function()
// {
//     alert('hello');

// }

console.log(user.sayhello());
console.log(user.sayhi());


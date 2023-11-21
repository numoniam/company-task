// var a=10;
// let c=30
// function test(){
//     let b=10;
//     var a=20;
//     let c=40
//     console.log(a);
//     console.log(b); 

//     let obj=[
//         {id:1,name:"savan"},    
//     ]

//     for(let i of obj){
//         console.log(i);
//     }
// }

// test()





let obj={
    name:"savan",
    age:23,

    getName:function(){
       console.log(this.name);
    }
}

// obj.getName()

// let obj2={
//     name:"test",
//     age:24
// }


let obj1=obj.getName()

console.log(obj1);

let arr1=[1,2,3,4]
let arr2=[6,7,8,9]

let arr3=[...arr1,...arr2]

console.log(arr3);



function a(b){

    setTimeout(()=>{
        
        console.log("first");
        b()
    },2000)
}

function b(){
    setTimeout(()=>{
        
        console.log("two");
    },1000)
}

a(b)
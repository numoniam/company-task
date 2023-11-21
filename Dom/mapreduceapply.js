// const arr=[5,1,3,2,6]

// const out=arr.map((value)=>{
//     return value*2
// })

// const triple=arr.map((value)=>{
//     return value*3
// })

// const binary=arr.map((value)=>{
//     return value.toString(16)
// })

// console.log(out);
// console.log(arr);
// console.log(triple);

// console.log(binary);

//---------------------------------------------------

// const arr=[5,1,3,2,6]

// const even=arr.filter((x)=>x>4)

// console.log(even);



// const check=arr.map((x,index,arr)=>{
//     console.log("-------------------------------");
   
//     console.log(arr);

// })

// console.log(check);

//------------------------------------------------------------

// let arr=[5,3,2,1]

// function findSum(){
//     let max=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>max)
//         {
//             max=arr[i]
//         }
        
//     }
//     return max
// }

// console.log(findSum());

// const outpu=arr.reduce((max,curr)=>{
//     if(curr>max)
//     {
//         max=curr;
//     }
//     return max


// },0)

// console.log(outpu);

//-----------------------------------------------------------------


const users=[
    {firstName:"savan",lastName:"ghori",age:26},
    {firstName:"Nency",lastName:"gadhiya",age:22},
    {firstName:"unnati",lastName:"solanki",age:22},
    {firstName:"dinkal",lastName:"hinsu",age:50},
    {firstName:"shruti",lastName:"dakhara",age:75},

]

const out=users.map((value)=>{
    return value.firstName + " "+value.lastName
})
console.log(out);


const output=users.reduce((acc,curr)=>{
    if(acc[curr.age])
    {
        acc[curr.age]=++acc[curr.age]

    }
    else
    {
        acc[curr.age]=1
    }
    return acc
},{})

console.log(output);


//-----------------

const savan=users.filter((value)=>{
    if(value.age>=26)
    {
        return value.firstName
    }

})

savan()
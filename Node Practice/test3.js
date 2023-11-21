function savan(){
    return setTimeout(()=>{
        console.log("hello");
    },1000)
}

async function myName(){
    const variable=await savan()

    console.log(variable);
}
myName()
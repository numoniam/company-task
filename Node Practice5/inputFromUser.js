const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("please enter name: ",(name)=>{
    console.log(name);
    rl.close()
})

rl.on('close',()=>{
    console.log("interface close");
    process.exit(0);
})
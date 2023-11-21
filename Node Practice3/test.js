function savan(arg) {
    return new Promise((resolve, reject) => {
        if (arg == true) {
            setTimeout(() => {
                resolve("hello")
            }, 2000)

        }
        else {
            setTimeout(() => {
                reject("some thing happen")
            },2000)
        }

    })
}

async function hello() {
    try {
        let data = await savan(true)
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
    
}
hello()
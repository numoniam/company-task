const superagent=require('superagent')

const getDogPic=async()=>{
    try{
        const res1 =  superagent.get('https://dog.ceo/api/breeds/image/random')
        const res2 =  superagent.get('https://dog.ceo/api/breeds/image/random')
        const res3 =  superagent.get('https://dog.ceo/api/breeds/image/random')

        const all=await Promise.all([res1,res2,res3]);
        const img=all.map((value)=>{
            return value.body.message
        })
        console.log(img);


    }
    catch(err)
    {
        console.log(err);
    }
}
getDogPic()
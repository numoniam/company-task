let str=['0',1,'false',2,3,0,0,4,5,6,0,0]

function find(str)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==0)
        {
            str.splice(i,1);
            count++;
            i--;
        }
    }

    for(let i=0;i<count;i++)
    {
        str.push(0);
    }

    return str;
}

console.log(find(str));

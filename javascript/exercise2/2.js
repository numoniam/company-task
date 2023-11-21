let input=prompt('Enter the value')

function print(input)
{
    let arr=[input[0]];

    for(let i=0;i<input.length;i++)
    {
        if(input[i-1]%2==0 && input[i]%2==0)
        {
            arr.push('-',input[i])
        }
        else{
            arr.push(input[i])
        }
    }
    let result=arr.join("");
    return result;
}

document.write(print(input));
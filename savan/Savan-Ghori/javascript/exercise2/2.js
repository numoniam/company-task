//2. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​ ​ as​ ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.


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
    let result=arr.join("");//convert array to string
    return result;
}

document.write(print(input));
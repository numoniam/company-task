function counter()
{
    let count=0;

    return function()
    {
        return count++;
    };
}

let cou=counter();

alert(cou()); //0
alert(cou()); //1
alert(cou()); //2
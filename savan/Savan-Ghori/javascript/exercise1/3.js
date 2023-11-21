let value = prompt("Enter the value",'');

b = Math.floor(value/2)

for (let i=0;i<b;i++) 
{
    for (let j = 0; j<value; j++) 
    {
        if (j==value-b-i-1 || j==value-b+i-1) 
        {
            document.write("*");
        } 
        else {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}


for(let i=b; i>=0;i--) 
{
    for (let j=value-1;j>=0;j--)
     {
        if(j==value-b-i-1 || j==value-b+i-1) 
        {
            document.write("*");
        } 
        else {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}
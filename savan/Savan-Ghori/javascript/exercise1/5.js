let n=prompt("enter the value");


for(let i=1;i<=n;i++)
{
    for(let k=0;k<i;k++)
    {
      document.write("&nbsp");
    }

    for(let j=i;j<=n;j++)
    {
      document.write(j);
      document.write("&nbsp &nbsp");

    }
    document.write('<br>');    
}

for(let i=n;i>=1;i--)
{
    for(let k=0;k<i;k++)
    {
      document.write("&nbsp");
    }

    for(let j=i;j<=n;j++)
    {
      document.write(j);
      document.write("&nbsp &nbsp");

    }
    document.write('<br>');

    
}
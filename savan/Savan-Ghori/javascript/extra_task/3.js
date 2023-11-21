let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


for(let i=0;i<arr.length;i++)
{
   for(let j=i;j<arr.length;j++)
   {
      let temp=arr[i][j];
      arr[i][j]=arr[j][i];
      arr[j][i]=temp
   }
}

console.log(arr);

for(let i=0;i<arr.length;i++)
{
   //exchange 1 colum with last colum
   let li=0; //0
   let ri=arr[i].length-1; //2

   while(li<ri)
   {
      //swap the colum
      let temp=arr[i][li];
      arr[i][li]=arr[i][ri];
      arr[i][ri]=temp;
      li++;
      ri--;
   }

}
console.log(arr);
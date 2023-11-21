//4. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​ array.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) 
{
    let j = Math.floor(Math.random() * (i + 1))
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(arr);
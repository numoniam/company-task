//3. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​ frequent​ ​ item​ ​ of​ ​ an​ ​ array.


let arr = [0, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9];

let maxCount = 0, temp;


for(let i = 0; i < arr.length; i++) {
    let count = 0;
    for(let j = i+1; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            count++;
        }
        if(count > maxCount) {
            maxCount = count;
            temp = arr[i];
        }
    }
}

console.log(temp);





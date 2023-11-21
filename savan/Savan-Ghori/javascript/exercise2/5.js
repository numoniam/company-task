//5. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​ of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, and intersection of two arrays.

let arr1 = [0, 1, 2, 3];
let arr2 = [3, 4, 5];

//union
let arr = [...arr1, ...arr2];
console.log(arr);

//difference
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            let temp = arr[arr.length - 1];
            arr[arr.length - 1] = arr[j];
            arr[j] = temp;
            arr.pop();
        }
    }
}

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            let temp = arr2[arr2.length - 1];
            arr2[arr2.length - 1] = arr2[j];
            arr2[j] = temp;
            arr2.pop();
        }
    }
}
arr2.sort();
console.log(arr2);

//intersection
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] == arr1[j]) {
            let temp = arr1[0];
            arr1[0] = arr1[j];
            arr1[j] = temp;
            arr1.shift();
        }
    }
}
arr1.sort();
console.log(arr2);



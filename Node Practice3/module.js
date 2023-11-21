// console.log(arguments);

// console.log(require('module').wrapper);

// const Cal=require('./script6')

// const obj=new Cal()

// console.log(obj);

// const val=obj.add(10,20)
// console.log(val);

const cal1=require('./script6')

console.log(cal1.add(10,20));
console.log(cal1);

const {add,multiply}=require('./script6')

console.log(add(10,20));
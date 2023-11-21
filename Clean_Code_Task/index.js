const x1=require('./multiplication/variable1')
const x2=require('./multiplication/variable2')
const mult=require('./multiplication/index')

const y1=require('./addition/variable1')
const y2=require('./addition/variable2')
const add=require('./addition/index')
 

const z1=require('./subtraction/variable1')
const z2=require('./subtraction/variable2')
const sub=require('./subtraction/index')

console.log('multiplication',mult(x1,x2));
console.log('addition',add(y1,y2));
console.log('subtraction',sub(z1,z2));



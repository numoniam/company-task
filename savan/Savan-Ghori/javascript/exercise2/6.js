//Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​ with​ ​ values​ ​ (either numeric or​ string​ ​ with​ ​ one character)​ ​ on​ ​ supplied​ ​ bounds.

let n=prompt('Enter the value');

let arr=[ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ]

let arr2=[];

function bound(n){

    for(let i=0;i<arr.length;i++)
    {
      arr2.push(arr[i]);
      i+=n-1;

    }
    document.write(arr2);

}

bound(n)


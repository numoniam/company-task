let arry = [0, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9];

function freq(arr) {

    let arry2 = [];
    for (let i = 0; i < arry.length; i++) 
    {
        let count = 0;

        for (let j = i + 1; j < arry.length; j++) 
        {
            if (arry[i] === arry[j])
            {
                count += 1
            }
        }
        arry2.push(count);
    }

    let sortarr=arry2.sort();

    let maxNum= document.write(sortarr[sortarr.length-1]);

    document.write(maxNum);

}

freq(arry);


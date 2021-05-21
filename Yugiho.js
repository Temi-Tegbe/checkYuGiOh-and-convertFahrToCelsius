const checkYuGiOh = (n) => {

    const arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    arr.forEach ((num, index, array) =>{


        if(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
            array[index] = "yu-gi-oh";

        }
        else if (num % 2 === 0 && num % 3 === 0) {
             array[index] = "yu-gi";


        }

        else if (num % 2 === 0 && num % 5 === 0 )
        {
             array[index] = "yu-oh";

        }

        else if (num % 3 === 0 && num % 5 === 0) {
             array[index] = "gi-oh";

        }

        else if (num % 2 === 0) {
            array[index] = "yu";

            }

            else if (num % 3 === 0) {
                array[index] = "gi";

            }

            else if (num % 5 === 0) {
                array[index] = "oh";
            }
        
    })

   


let parsedN;

if (!Array.isArray(n)) {

    parsedN = parseInt(n);
}

if (isNaN(parsedN)) {
    return `Invalid Parameter: ${JSON.stringify(n)}`;
}


return arr;
}

 console.log(checkYuGiOh(30));

/*
    1.  A paramater is a value that is passed into a function,
        An Argument is what the function receives.
    2.  Console.log logs to the Console, Return ends the function
        and gives a value back to where it was called from.
    3.  The return ends the function, the value cannot be null.


2.

//  checkPalindrome('Borscht');

function checkPalindrome(str) {
    let upperStr = str.toUpperCase();
    let len = str.length;
    for(let i = 0; i < len / 2; i++) {
        let x = (len - 1) - i;
        if(upperStr[i] !== upperStr[x]) {
            return false;
        } else {
            if (i == x) {
                return true;
            };
        };
    };
};

3.

function sumDigits(num) {
    let str = num.toString();
    const arr = str.split(' ');
    let total = 0;
    console.log(arr);
    for(i = 0; i < arr.length; i++) {
        total += arr[i];
        console.log(total, arr[i], i);
    };
    return total;
};

4.

function calculateSide(sideA, sideB) {
    let sideC = ((sideA * sideA) + (sideB * sideB));
    let hypo = Math.sqrt(sideC);
    return hypo;
};

5.

function sumArray([arr]) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    };
    return total;
};

6.

function checkPrime(num) {
    for(i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }; 
    };
    return true;
};

function printPrimes(num) {
    let primes = [];
    for(let i = 2; i < num; i++) {
        for(let k = 2; k < i; k++) {
            if (i % k === 0) {
            primes.push(i);
            };
        }; 
    };
    for (let x = 0; x < primes.length; x++) {
        console.log(primes[x]);
    };
};

*/
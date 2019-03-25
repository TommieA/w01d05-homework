/*

A.  Q + A

1.  Let or const = the value
2.  variable = new value
3.  let New variable = old variable
4.  Declare is when you initially set up a variable
    Assign is when you give the variable a value
    Define I believe is synonymous with Declare
5.  I, myself, spent about 60/40

B. Strings

1.  let firstVariable = "Hello World"
        firstVariable = 5
    let secondVariable = firstVariable
        secondVariable = "any string"
        5
2.  let yourName = "Tommie"
    console.log('Hello, my name is ' + yourName)

C.  Booleans

    <
    > 
    ===
    !=
    == == == == == !=
    ==
    ===
    < >
    === !=
    ==

D. The Farm

1.  let animal = 'cow'
2.  if (animal === 'cow') {console.log('mooooo')}
3.  else {console.log('Hey! You're not a cow.')}

E.  Driver's Ed

1.  let ageHold = 0
2.  if (ageHold >= 16) {console.log("Here are the keys" )
3.  } else {"Sorry, you're too young"}

II Loops.
A.  The Basics

1.  for(i = 0; i <= 10; i++) {
        console.log(i);
    }
2.  for(i = 10; i <= 400; i++) {
        console.log(i);
    }
3.  for(i = 12; i <= 4000; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }

 B. Get Even
 
 1. for(i = 1; i <= 100; i++) {
        if(i % 2 === 0) {
            console.log(i + ' <== is an even number');
        };
    };

C.  Give me Five

    for(i = 1; i <= 100; i++) {
        if(i % 3 === 0) {
            console.log('I found a ' + i + '. Three is a crowd');
        };
        if(i % 5 === 0) {
            console.log('I found a ' + i + '. High Five!');
        };
    };

D.  Savings account

    let bank_account = 0;
    for(let i = 1; i <= 10; i++) {
        bank_account += i;
    }

    let bank_account = 0;
    for(let i = 1; i <= 100; i++) {
        (bank_account += i) * 2;
    }


E.  Multiples of 3 and 5

    let total = 0;
    for(let i = 1; i < 1000; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
        console.log(total);
    }
    
III.    Arrays and Control Flow
A.      Talk about it

1.  Elements
2.  The order they were put into thearray
3.  Food in the refrigerator

B.  Easy does it

    const quotes = ["We don't need no stinking badges",
                    "I'm not dead yet!", 
                    "tis but a flesh wound!"]

C.  Accessing Elements

1.  randomThings[0];
2.  randomThings[2] = 'World';
3.  It does.

D.  Change Values

1.  ourClass[2];
2.  ourClass[4] = 'Octicat';
3.  ourClass.push("Cloud City");

*/
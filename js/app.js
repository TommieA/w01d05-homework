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

    const quotes = ["Badges? We don't need no stinking badges!",
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

E.  Mix It Up

1.  myArray.push("Egon", "My Choice");
2.  myArray.shift();
3.  myArray.unshift("Bob Marley");
4.  myArrat.pop();
5.  Got an error until Itookout the .prototype,then
    it reversed the array, mutate changes a constant.

F.  Biggie Smalls

    let int = 3;
    if(int < 100) {
        console.log("Little number")
    } else {
        console.log("Big number")
    }

G.  Monkey in the Middle

    let int = 3;
    if(int < 5) {
        console.log("Little number")
    } else if (int > 10) {
        console.log("Big number")
    } else console.log("monkey")

H.  What's in Your Closet

1.  Console.log("Kristyn is rocking that " + 
                KristynsCloset[2] + " today")
2.  KristynsCloset.splice(5,0,"Raybans");
3.  KristynsCloset[6] = "Stained Knit Hat";
4.  thomsCloset[0] [0]];
5.  thomsCloste[1] [0];
6.  thomsCloset[2] [1];
7.  console.log("Thom's looking fierce in a " +
        thomsCloset[0][2] + ", " + thomsCloset[1] [2]
        + ", and " + thomsCloset[2] [0] + "!")
8.  thomsCloset[1] [2] = "Footie Pajamas";

IV. Functions.
A.  Print Greeting.

    function printGreeting(name) {
        console.log(`Hello there, ${name} !`);
    }

B.  printCool

    function printCool(name) {
        console.log(name + " is Cool!");
    }

C.  calculateCube

    function calculateCube(sides) {
        console.log(Math.pow(sides, 3));
    }

D.  isVowel

    function isVowel(char) {
        let vowels = ['A', 'E', 'I', 'O', 'U'];
        for(i = 0; i < vowels.length; i++) {
                let uChar = char.toUpperCase();
                if (uChar == vowels[i]) {
                    return true;
                };
        };
        return false;
    };

E.  getTwoLengths

    function getTwoLengths(str1, str2) {
        let result = [];
        result.push(str1.length);
        result.push(str2.length);
        return result;
    }

F.  getMultipleLengths

    function getMultipleLengths(str) {
        let arr = [];
        let currentWord = "";
        for(let i = 0; i < str.length; i++) {
            if(str[i] === " ") {
                arr.push(currentWord);
                currentWord = ""
            } else {
                currentWord += str[i];
            };
        };
        arr.push(currentWord);
        for(let x = 0; x < arr.length; x++) {
            arr[x] = arr[x].length;
        };
        console.log(arr);
    };

G.  maxOfThree

    function maxOfThree(arr) {
        let largest = 0;
        for(let i = 0; i < arr.length; i++){
            if (arr[i] > largest){
                largest = arr[i];
            };
        };
        return largest;
    };

maxOfThree([34,56,2]);

H.  printLongestWord;

    function printLongestWord(arr){
        let longestWord = "";
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length > longestWord.length){
                longestWord = arr[i];
            };
        };
        return longestWord;
    };

    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

I.  transmogrify
    
    function transmorgify(num1, num2, num3) {
        let tNum = Math.pow((num1 * num2),num3);
    };

    console.log(transmorgify(5, 3, 2));

J.  reverseWordOrder

    function reverseWordOrder(str) {
        let wordArr = [];
        let revWord = "";
        let currentWord = "";
        for(let i = 0; i < str.length ; i++) {
                if(str[i] === " ") {
                    wordArr.unshift(currentWord);
                    currentWord = "";
                } else {
                    currentWord = currentWord + str[i];
                };    
        };
        wordArr.unshift(currentWord);
        revWord = wordArr.join(" ");
        return revWord;
    };
    
    reverseWordOrder("Four score and seven years ago");
   
K.  Math Random
1.
    function rNumber() {
        let rNum = Math.floor((Math.random() * 10) + 1);
        return rNum;
    }
    return rNumber();
2.
    function rNumber() {
       let rNum = Math.floor(Math.random() * (10 + 100)) + 10;
       return rNum;
    }
    return rNumber();  
3.
    function rNumber() {
      let rNum = Math.floor(Math.random() * (532 + 13267)) + 10;
      return rNum;
    }
    return rNumber(); 
4.
    function rNumber() {
        let rNum = (Math.random() * 10) + 1;
        return rNum;
    };
    return rNumber()
5.
 
    const quotes = ["Badges? We don't need no stinking badges!",
                    "I'm not dead yet!", 
                    "tis but a flesh wound!"]

    quotes.push("You'll never know how far you can go unless you risk going too far",
                "History favors the Bold");

    function getRandomElement() {
        let i = [Math.floor(Math.random() * quotes.length)];
        return quotes[i];
    };

    return getRandomElement();


Objects
1.
*/
    let user = {name:"Me", email:"me@email.com", age:35, purchases:[]};

    user.email = "New.address@email.com";
    user.age++;
    user["location"] = "Northglenn";

    user.purchases.push("carbohydrates")
    user.purchases.push("Piece of Mind");
    user.purchases.push("Merino jodhpurs");

    user.friend = {
        name: "Brian Taylor",
        age: 47
    };

    user.friend["location"] = "Lakewood";

    user.friend.age = 55;
    user.friend["purchased"] = [];
    user.friend.purchased.push("The One Ring");
    user.friend.purchased.push("A latte");
    console.log(user.friend.purchased[user.friend.purchased.length -1]);

    for(i =0; i < user.purchases.length; i++) {
        console.log(user.purchases[i]);
    };

    for(i = 0; i < user.friend.purchased.length; i++) {
        console.log(user.friend.purchased[i]);
    };

    function updateUser() {
        user.age++;
        user.name = user.name.toUpperCase();
    };
    updateUser();

    function oldAndLoud(person) {
        person.age++;
    };
    oldAndLoud(user);
    
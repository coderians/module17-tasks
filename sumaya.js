/**------------------------------------------------------------------------
 * ?                                ABOUT
 * @author         :  Sumaya Akter
 * @email          :  sumaya55230@gmail.com
 * @repo           :  https://github.com/coderians/module17-tasks
 * @createdOn      :  14-Sep-2024 2:00 PM
 * @description    :  Module 17 - Task Solution Using Javascript Fundamentals
 *------------------------------------------------------------------------**/

/**------------------------------------------------------------------------
 * todo  Problem 1 - Variable Declaration and Initialization
 *------------------------------------------------------------------------**/

let name;
let age;
let isStudent;

name = 'John';
age = 25;
isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

/*---------------------------- END OF Problem-1 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 2 - Simple Arithmetic Operations
 *------------------------------------------------------------------------**/

let a = 10;
let b = 20;

let sum, difference, product, quotient;

sum = a + b;
difference = a - b;
product = a * b;
quotient = a / b;

console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);

/*---------------------------- END OF Problem-2 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 3 - Data Type Identification
 *------------------------------------------------------------------------**/

function checkInputType(input) {
   let inputType = typeof input;
   return inputType;
}

console.log(checkInputType('Sumaya')); // Output: string
console.log(checkInputType(23)); // Output: number
console.log(checkInputType(true)); // Output: boolean
console.log(checkInputType(['suma', 'rafa', 'raja'])); // Output: object
console.log(checkInputType({name: 'sumaya', age: 23})); // Output: object

/*---------------------------- END OF Problem-3 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 4 - Area of a Rectangle
 *------------------------------------------------------------------------**/

function calculateArea(length, width) {
    let areaOfRectangle = length * width;
   return areaOfRectangle;
}

console.log(calculateArea(20, 30)); // Output: 600
console.log(calculateArea(100, 150)); // Output: 15000

/*---------------------------- END OF Problem-4 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 5 - Simple Temperature Conversion
/*------------------------------------------------------------------------*/

function celsiusToFahrenheit(Celsius) {
    let Fahrenheit = Celsius * (9 / 5) + 32;
   return Fahrenheit;
}

console.log(celsiusToFahrenheit(38)); // Output: 100.4
console.log(celsiusToFahrenheit(39)); // Output: 102.2
console.log(celsiusToFahrenheit(40)); // Output: 104

/*---------------------------- END OF Problem-5 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 6 - Even or Odd Checker
/*------------------------------------------------------------------------*/

function isEven(number) {
   if (number % 2 === 0) {
      return 'even';
   } else {
      return 'odd';
   }
}

console.log(isEven(5)); // Output: odd
console.log(isEven(12)); // Output: odd

/*---------------------------- END OF Problem-6 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 7 - String Manipulation
/*------------------------------------------------------------------------*/

const str = 'Let your feet take you where you wants to go';

function toUpperCaseString() {
   let upperStr = str.toUpperCase();
   return upperStr;
}

console.log(toUpperCaseString());

function countCharacters() {
    //? Method 1 - Using length property
   let numberOfCharacters = str.length;

   /**----------------------------------------------
     *? Method  2 - Using for loop

         let numberOfCharacters = 0;
         for (let i = 0; i < str.length; i++) {
            numberOfCharacters = numberOfCharacters + 1;
         } 
     *---------------------------------------------**/

   return numberOfCharacters;
}

console.log(countCharacters());

/* Output:
		LET YOUR FEET TAKE YOU WHERE YOU WANTS TO GO
		44
*/

/*---------------------------- END OF Problem-7 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 8 - Swap Two Variables
/*------------------------------------------------------------------------*/

function swap(x, y) {
   let swap = ([x, y] = [y, x]);
   let swapType = typeof swap;
   return [swap, swapType];
}

console.log(swap(5, 10));
//Output: [ [ 10, 5 ], 'object' ]

/*---------------------------- END OF Problem-8 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 9 - Swap Two Variables
/*------------------------------------------------------------------------*/

function swap(x, y) {
   let swap = ([x, y] = [y, x]);
   let swapType = typeof swap;
   return [swap, swapType];
}

console.log(swap(5, 10));
//Output: [ [ 10, 5 ], 'object' ]

/*---------------------------- END OF Problem-9 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 10 - Simple Interest Calculator
/*------------------------------------------------------------------------*/

function calculateSimpleInterest(principal, rate, time) {
   let Interest = (principal * rate * time) / 100;
   return Interest;
}

console.log(calculateSimpleInterest(5000, 10, 12)); // Output: 6000
console.log(calculateSimpleInterest(10000, 10, 1));  // Output: 1000

/*---------------------------- END OF Problem-10 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 11 - Grade Calculator
/*------------------------------------------------------------------------*/

function calculateGrade(score) {
   if (score < 0 || score > 100) {
      return 'Invalid Input';
   } else if (score >= 90 || score === 100) {
      return 'A';
   } else if (score >= 80 || score === 89) {
      return 'B';
   } else if (score >= 70 || score === 79) {
      return 'C';
   } else if (score >= 60 || score === 69) {
      return 'D';
   } else if (score < 60 || score === 0) {
      return 'F';
   }
}

console.log(calculateGrade(69));   // Output: D
console.log(calculateGrade(78));   // Output: C
console.log(calculateGrade(82));   // Output: B
console.log(calculateGrade(101));  // Output: Invalid Input
console.log(calculateGrade(33));   // Output: F
console.log(calculateGrade(-65));  // Output: Invalid Input

/*---------------------------- END OF Problem-11 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 12 - FizzBuzz Problem
/*------------------------------------------------------------------------*/



/*---------------------------- END OF Problem-12 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 13 - Palindrome Checker
/*------------------------------------------------------------------------*/

function isPalindrome(input) {
   if (typeof input !== 'string') {
       return 'Input must be string';
   }

   let reverseInput = '';
   for (const char of input) {
       reverseInput = char + reverseInput;
   }

   if (input === reverseInput) {
       return true;
   } else {
       return false;
   }
}

console.log(isPalindrome('madam')); // Output: true
console.log(isPalindrome('mama'));  // Output: false
console.log(isPalindrome('mam'));   // Output: true
console.log(isPalindrome(242));     // Output: Input must be string

/*---------------------------- END OF Problem-13 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 14 - Find the Largest Number
/*------------------------------------------------------------------------*/

function maxValue(n1, n2, n3) {
   let max = Math.max(n1, n2, n3);
   return max;
}

console.log(maxValue(23, 54, 62)); // Output: 62
console.log(maxValue(0, 5, -5));   // Output: 5

/*---------------------------- END OF Problem-14 ----------------------------*/

/**------------------------------------------------------------------------
 * todo  Problem 15 - Count Vowels in a String
/*------------------------------------------------------------------------*/



/*---------------------------- END OF Problem-15 ----------------------------*/


/**------------------------------------------------------------------------
 * todo  Problem 16 - Calculate Factorial
/*------------------------------------------------------------------------*/

function factorial(n) {
   let fact = 1;
   for (let i = 1; i <= n; i++) {
       fact = fact * i;
   }
   return fact;
}

console.log(factorial(4)); // Output: 24

/*---------------------------- END OF Problem-16 ----------------------------*/
// // 1
// let arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

// let sum = 0;

// for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
// }

// for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
// }

// console.log(sum);


// //2
// let n1 = 22;


// for (let i = 2; i <= n1; i += 2) {
//     console.log(i);
// }


// //3
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// //4
// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];

// let newArray = [];
    
// for (let i = 0; i < arr_3.length; i++) {

//     newArray.push(arr_3[i] + arr_4[i]);

// }

// console.log(newArray); 


// //5
// let str1 = "javascript";

// let result = '';
// for (let i = 0; i < str1.length; i++) {
//     if ((i + 1) % 2 === 0) 
//     {
//         result += 'Z';
//     } 

//     else 
//     {
//         result += str1[i];
//     }
// }

// console.log(result);


// //6
// let str2 = "don’t know why";

// let result2 = '';

// for (let i = 0; i < str2.length; i++) {
//     if (str2[i] === 'y' || str2[i] === 'Y') 
//     {
//         result =  "yes";
//     }

//     else
//     {
//         result =  "no";
//     }
// }

// console.log(result2);


// //7
// let n2 = 5;
// let factorial = 1;

// for (let i = 1; i <= n2; i++) {
//     factorial *= i;
// }

// console.log(factorial);


// //8
// let pin = 1234;

// for (let i = 0; i < 4; i++) {
//     let guess = parseInt(prompt("Please make your guess:"));

//     if (guess === pin) {
//         console.log("That was correct!");
//         break; 
//     } else {
//         console.log("Sorry that was wrong.");
//     }

//     if (i === 3) {
//         console.log("Attempts exhausted.");
//     }
// }


// //9
// let str3 = "racecar";
// let str4 = "Java";

// console.log("string1 palindrome?:");
// console.log(str3.toLowerCase() === str3.toLowerCase().split('').reverse().join(''));

// console.log("string2 palindrome?:");
// console.log(str4.toLowerCase() === str4.toLowerCase().split('').reverse().join(''));


// //10
// let num1 = 2;
// let num2 = 8;

// function sum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sum(num1));
// console.log(sum(num2));
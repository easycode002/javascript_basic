// #ex1===========================================
// print number 1-10
// for (let i = 1; i<=10; i++){
//     console.log(i)
// }

// #ex2===========================================
// for (let i = 10; i>=1; i--){
//     console.log(i)
// }

// #ex3===========================================
// let totalNum = 99;
// if (totalNum >= 95) {
//     console.log("Grade A");
// } else if (totalNum >= 90) {
//     console.log("Grade B");
// } else if (totalNum >= 85) {
//     console.log("Grade C");
// } else if (totalNum >= 75) {
//     console.log("Grade D"); // Corrected typo from "Grad D" to "Grade D"
// } else if (totalNum >= 55) {
//     console.log("Grade E");
// } else {
//     console.log("You lost score. Your grade is F"); // Adjusted the message for grade F
// }

// #ex4===========================================
// let emp = ["Lara","Evee","Simi"];
// let sal = [1000,2000,3000];
// for (let i = 0;i<emp.length;i++){
//     console.log(`Name : ${emp[i]} Salary : ${sal[i]}`)
//     console.log("Name",emp[i], " ", "Salary",sal[i]);
// }

// #ex5===========================================
// for (let i = 1; i<=10; i++){
//     // check number is not divisible by 2
//     if(i%2!==0){
//         console.log(i)
//     }
// }


// #ex6===========================================
// let oddCount = 0;
// let evenCount = 0;
// // declear new empty arr for store evenNum and oddNum
// let oddNum = [];
// let evenNum = [];
// for (let i = 1; i <= 10; i++){
//     if (i%2 === 0){
//         evenCount++;
//         evenNum.push(i)
//     }else{
//         oddCount++;
//         oddNum.push(i);
//     }
// }
// console.log(`evenCount is : ${evenCount}`);
// console.log("oddCount  is :",oddCount);
// console.log("Even number  : " + evenNum.join(', '));
// console.log(`Odd Number   : ${oddNum.join(', ')}`)

// #ex7===========================================
// let totalBuzz = [];
// let totalFizz = [];
// let totalFizzBuzz = [];
// for (let j = 1; j<=100; j++){
//     // check specific with condition
//     if(j%3 == 0 && j%5 == 0){
//         // console.log("FizzBuzz")
//         totalFizzBuzz.push(j)
//     }else if(j%5==0){
//         // console.log("Buzz")
//         totalBuzz.push(j)
//     }else if(j%3==0){
//         // console.log("Fizz")
//         totalFizz.push(j)
//     }
// }
// console.log(`Total FizzBuzz : ${totalFizzBuzz}`)
// console.log(`Total Buzz : ${totalBuzz}`)
// console.log(`Total Fizz : ${totalFizz}`)

// #ex8===========================================
// const numbers = [1,2,3,4,5,6];
// let totalSum = 0;
// for (let i = 0; i < numbers.length; i++){
//     totalSum += numbers[i];
//     // totalSum = totalSum + numbers[i];
// }
// console.log(`Total sum is : ${totalSum}`)

// #ex9===========================================
let primes = [];
// loop number 2-100
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    // Check if i is prime
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;        // break out inner loop, if j div i
            break;
        }
    }
    // if prime add to array
    if (isPrime) {
        primes.push(i);
    }
}
// Print the prime numbers
console.log("Prime numbers between 1 and 100:");
console.log(primes.join(", "));


// #ex10===========================================
// const arrNumber = [1,2,3,4,5,6,7,0,2,4,5,3,6,100];
// let max = arrNumber[0];
// for (let i = 1; i<arrNumber.length; i++){
//     if(arrNumber[i] > max){
//         max = arrNumber[i];
//     }
// }
// console.log(max)


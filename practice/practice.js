let orangePrice = 100;
let applePrice = parseInt('20.22');
console.log(typeof applePrice);
let total = 20.33333;
console.log(total.toFixed(2))


// console.log(orangePrice + applePrice);
let number = [1, 3, 4, 6, 9, 90];
number.splice(4,2);
// console.log(number);

let array = [10, 20, 40, 50];
let newArray = [...array.slice(1,2), ...array.slice(3)];
// console.log(newArray);
let num = ['angur', 'peyara', 'apple','coconut'];
let result = num.join(' ');
// console.log(result);


// Array Problem Soving
let number1 = [1, 2, 3, 4, 5, 6];
for(let number of number1){
    // console.log(number);
}
let num2 = 1;
while (num2<=10){
    if(num2%2===0){
        console.log('Even Number',num2);
    }
    num2++;
}
let text = "I love JavaScript";
let result2 = text.split(" ");
let result3= result2.join('')

//console.log(result3);

let num4 = [10, 100, 30, 40];
let sort = num4.sort((a,b)=>b-a);
//console.log(sort);

let name = 'I Love BD I like I go I eat I ate';
let replaced = name.replace(/I/g, 'We');
console.log(replaced);

function sumOfEvenNumbers(arr) {
    let evenSum = 0;
    for(let even of arr){
        if(even%2===0){
            evenSum = evenSum + even;
            
        }  
    } 
    return evenSum;
}
let even = [1, 22, 3, 42, 5, 62, 7, 8];
let evenNumber = sumOfEvenNumbers(even);
console.log(evenNumber);


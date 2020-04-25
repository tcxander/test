//
// 'use strict';

// let a = 5;
// console.log(a);

// console.log(typeof(String(4)));

// console.log(typeof("ww" + 5));
// console.log('http://vk.com/catalog/' + 5);
// // to NUmber

// //console.log("arr" + "- object");

// let incr = 10,
//     decr = 10;

// // Префиксная форма
// //  console.log(++incr);
//  //   console.log(--decr);

// //постфикс
// console.log(incr++);
// console.log(decr--);


// let isChecked = false,
//     isClose = false;
// console.log(isChecked || !isClose);
// //prompt("FU");
// console.log("FFFS!!");

// let num = 20;
// function showFirstMessage (text) {
//     alert(text);
//     // let num = 10;
//     console.log(num);
// }
// showFirstMessage("FFFSS!");
// console.log(num);

// let calc = function(a, b) {
//     return (a + b);
// }

let calc = (a,b) => a+b


console.log(calc(599,1)); 

function retVar () {
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twele = "12.2";
// console.log(Math.round);
// console.log(Math.round(twele));
console.log(parseInt(twele));
console.log(parseFloat(twele));
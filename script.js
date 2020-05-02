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

//call back functions это когда функция внутри аргументов исходной функции
// function learnJS(lang, callback) {
//     console.log("I am learning " + lang);
//     callback();
// }
// function done() {
//     console.log("I've past 3rd lesson");
// }

// learnJS("Javascript", done)

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// }
// console.log(options.name);
// options.bool = false;
// options.colours = {
//     border: "black",
//     bg: "red"
// }
// delete options.bool;

// // console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];
// arr.forEach(function(item, i, mass) {
//     console.log(i+1 + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);
// let mass = [1, 3, 4, 6, 7];

// for (let key in mass) {
//     console.log(key);
//  }
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let ans = prompt("",""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["awwe", 'asdd', 'pp', 'rqa'],
// i = arr.join(', ');
// console.log(i);

let ar = [1, 15, 4],
i = arr.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}
console.log(arr);

// let soldier = {
//     health: 400,
//     armour: 100
// }

// let john = {
//     health: 100
// }

// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armour);


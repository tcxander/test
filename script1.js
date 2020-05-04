
// let btn1 = document.querySelectorAll('button'),
//     wrap = document.querySelector('.wrapper'),
//     link = document.querySelector('a');
// btn[0].onclick = function () {
//     alert('You pressed 1 st button');
// };

// btn[0].onclick = function () {
//     alert('You pressed 1 st button AGAIN!');
// };
// btn1[0].addEventListener('click',  function(event){
//    console.log(event);
//     let target = event.target;
//     target.style.display = 'none';
//     console.log('Something happened: ' + event.type + 'on element' + event.target);
    
// });
// wrap.addEventListener('click', function() {
//     console.log('Something happened: ' + event.type + 'on element' + event.target);
// });

// link.addEventListener('click', function() {
//     event.preventDefault();
//     console.log('Something happened: ' + event.type + 'on element' + event.target);

// })

// btn1.forEach(function(item) {
//     item.addEventListener('mouseleave', function() {
//         console.log('Mouse LEFTT!!!!');
//     });
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('WTF MAN DONT TOUCH');
// });


//Mobile

//touchstart
// touchmove
// touchend
// touchenter
//touchleave
// touchcancel

// window.addEventListener('DOMcontentLoaded', function() {
//     let box = document.querySelector('.box');

//     box.addEventListener('touchstart', function(e) {
//         e.preventDefault();

//         console.log("Red box: touchstart");
//         console.log("e.target");
//         console.log("e.touches[0]");
//         console.log('e.targetTouches');
//     });

//     box.addEventListener('touchmove', function(e) {
//         e.preventDefault();
//         console.log("Red box: touchmove");
//     });

//     box.addEventListener('touchend', function(e) {
//         e.preventDefault();
//         console.log("Red box: touchend");
//     });

// });

//Regural expressions

// new RegExp('pattern', 'flags');
// /pattern/

// let ans = prompt('вВедите ваше имя');
// let reg = /n/g;

// console.log(reg.test(ans));

// console.log(ans.match(reg));


//console.log(ans.search(reg));
//
//Flags
// i
//g
//m 

//Все цифры:
// \d \D
//Все буквы
// \w
// \s пробел
 
// let pass = prompt('Введите пароль');
// console.log(pass.replace(/./g, "*")); 
// console.log(pass);
// alert('12-34-56'.replace(/-/g,":"));

let str = 'My nane is/ R2D2';

console.log(str.match(/\//i));

 
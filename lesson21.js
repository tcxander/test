let box = document.querySelector('.box'),
    btn = document.querySelector('button')
let width = box.clientWidth,
    heigth = box.clientlHeight;

console.log(width);
console.log(heigth);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

btn.addEventListener('click', function() {
    box.scrollTop = 0;
});

scrollBy(0, 200);

scrollTo(0, 200);
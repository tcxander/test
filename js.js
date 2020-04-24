// let num = 50;
// if (num < 49) {
//     console.log('Not right!');
// } else if (num > 100) {
//     console.log('A bit large!');
// } else {
//     console.log('Right!');
// }

//(num == 50) ? console.log('NOT right') : console.log('Right');

// switch (num) {
//     case num < 49:
//         console.log('Not right!');
//         break;
//     case num >100:
//         console.log('A bit large!');
//         break;
//     case num > 80:
//         console.log('Still large');
//         break;
//     case  50:
//         console.log('ITs 50');
//         break;
//     default:
//         console.log('Somthings wrong');
//         break;
// }

//while cycle
let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do Cycle
do {
    console.log(num);
    num++;
}
while (num < 55);

// for Cycle
for (let i = 1 ; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}
let num = 50;
if (num < 49) {
    console.log('Not right!');
} else if (num > 100) {
    console.log('A bit large!');
} else {
    console.log('Right!');
}

//(num == 50) ? console.log('NOT right') : console.log('Right');

switch (num) {
    case num < 49:
        console.log('Not right!');
        break;
    case num >100:
        console.log('A bit large!');
        break;
    case num > 80:
        console.log('Still large');
        break;
    case  50:
        console.log('ITs 50');
        break;
    default:
        console.log('Somthings wrong');
        break;
}
let money = +prompt("Your budget for month", '');
let time = prompt("Enter Date it YYYY-MM-DD format", "");
console.log(money);
console.log(time);

let appData =  {
    mon: money,
    timeData: time,
    expenses: { },
    optionalExpenses: {},
    income:[],
    savings: false
};



// for (let i = 0; i < 2; i++) {
//     let a = prompt('Enter your expences sort 1 name',""),
//         b = +prompt('Enter cost of sort 1 expences', "");
//         appData.expenses[a] = b;

//         if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//          && a != '' && b != '' && a.length < 50 ) {
//              console.log ("done");
//              appData.expenses[a] = b;
//          } else {
//              alert('Ошибка ввода, введите данные заново!');
//             i--;
//          }
// }

// let i = 0;
// while (i < 2) {
//     let a = prompt('Enter your expences sort 1 name',""),
//     b = +prompt('Enter cost of sort 1 expences', "");
//     appData.expenses[a] = b;

//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//      && a != '' && b != '' && a.length < 50 ) {
//          console.log ("done");
//          appData.expenses[a] = b;
//      } else {
//          alert('Ошибка ввода, введите данные заново!');
//         i--;
//          }  
//          i++;
// }

let i = 0;
do {
let a = prompt('Enter your expences sort 1 name',""),
    b = +prompt('Enter cost of sort 1 expences', "");
appData.expenses[a] = b;

if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
 && a != '' && b != '' && a.length < 50 ) {
     console.log ("done");
     appData.expenses[a] = b;
 } else {
     alert('Ошибка ввода, введите данные заново!');
    i--;
}
i++;
} while (i < 2);

appData.moneyPerDay = appData.mon/30;
alert('Your budget per Day:' + appData.moneyPerDay );
// alert('Your budget minus Expenses per Day' + a7);
// console.log(appData.mon/30);
// console.log(a7);
if (appData.moneyPerDay < 100) {
    console.log("Minimum level of money");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average level of money");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level of money");
} else {
    console.log("Error !!!");
}

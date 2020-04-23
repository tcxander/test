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
let a1 = prompt('Enter your expences sort 1 name',""),
    a2 = +prompt('Enter cost of sort 1 expences', ""),
    a3 = prompt('Enter your expences sort 2 name',""),
    a4 =  +prompt('Enter cost of sort 2 expences', "");

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;
console.log(appData.expenses.a1);
console.log(appData.expenses.a2);
console.log(appData.expenses.a3);
console.log(appData.expenses.a4);

let a7 = (((appData.mon-appData.expenses.a2-appData.expenses.a4)/30));
alert('Your budget per Day' + appData.mon/30 );
alert('Your budget minus Expenses per Day' + a7);
console.log(appData.mon/30);
console.log(a7);

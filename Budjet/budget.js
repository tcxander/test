
let money, time;

function start() {
money = +prompt("Your budget for month", '');
time = prompt("Enter Date it YYYY-MM-DD format", "");

while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Your budget for month", '');
}

console.log(money);
console.log(time);
}
start();
let appData =  {
    mon: money,
    timeData: time,
    expenses: { },
    optionalExpenses: {},
    income:[],
    savings: true
};

function chooseExpenses () {
for (let i = 0; i < 2; i++) {
    let a = prompt('Enter your expences sort 1 name',""),
        b = +prompt('Enter cost of sort 1 expences', "");
        
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
         && a != '' && b != '' && a.length < 50 ) {
             console.log ("done");
             appData.expenses[a] = b;
         } else {
             alert('Ошибка ввода, введите данные заново!');
            i--;
         }
}
}
chooseExpenses ();

function detectDayBudget() {
appData.moneyPerDay = (appData.mon/30).toFixed();
alert('Your budget per Day:' + appData.moneyPerDay );
}
detectDayBudget();

function detectLevel () {
if (appData.moneyPerDay < 100) {
    console.log("Minimum level of money");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average level of money");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level of money");
} else {
    console.log("Error !!!");
}
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What are savings SUM"),
            percent = +prompt("What is percentage?");

        appData.monthIncome = save/100/12*percent;
        alert("You income from deposit:" + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses () {
    for (let i = 1; i < 4; i++) {
        let b = +prompt('Enter cost OPTIONAL expenses', + i + "");
            if((typeof(b)) != null  && b != '' ) {
            console.log ("done");
            appData.optionalExpenses[i] = b;
        } else {
            alert('Ошибка ввода, введите данные заново!');
           i--;
    } 
}
}
chooseOptExpenses();
console.log(appData.optionalExpenses); 

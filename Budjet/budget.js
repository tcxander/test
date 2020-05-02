
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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.mon/30).toFixed();
        alert('Your budget per Day:' + appData.moneyPerDay );
        console.log(appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Minimum level of money");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Average level of money");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High level of money");
        } else {
            console.log("Error !!!");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("What are savings SUM"),
                percent = +prompt("What is percentage?");
    
            appData.monthIncome = save/100/12*percent;
            alert("You income from deposit:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        let items = prompt('Что принесет доп. доход? (перечислить через запятую)', '');
        if ((typeof(items)) === 'string' && (typeof(items)) !== null && items !== '') {
         appData.income = items.split(',');
         appData.income.push(prompt('Может что-то еще?', ''));
         appData.income.sort();    
        }
    
        appData.income.forEach(function(item, j) {
            console.log("Способы доп. заработка: " + (j+1) + ' ' + item);
        });
        
    },
    dataPerebor: function() {
        for (let key in appData) {
            console.log("свойство " + key + " имеет значение " + appData[key]);
           }
    } 
};








console.log(appData.optionalExpenses); 

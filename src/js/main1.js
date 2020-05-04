let start1 = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],   
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    utvBtnExpOb = document.getElementsByTagName('button')[0], 
    utvBtn2ExpNeob = document.getElementsByTagName('button')[1],
    rasscBtn = document.getElementsByTagName('button')[2],
    altRashod = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    chkBox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    //utvBtn.textContent.fontsize(22);
    // utvBtn.style.fontSize = '54px';
    // utvBtn.style.color = 'red';
    

    let money, time;
    utvBtnExpOb.disabled = true;
    utvBtn2ExpNeob.disabled = true;
    rasscBtn.disabled = true;


    start1.addEventListener('click', function() {
    money = +prompt("Your budget for month", '');
    time = prompt("Enter Date it YYYY-MM-DD format", "");
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Your budget for month", '');
    }
    console.log(money);
    console.log(time);
    appData.mon = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
   
    utvBtnExpOb.disabled = false;
    utvBtn2ExpNeob.disabled = false;
    rasscBtn.disabled = false;
});

    utvBtnExpOb.addEventListener('click', function() {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
                
                if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                 && a != '' && b != '' && a.length < 50 ) {
                     console.log ("done");
                     appData.expenses[a] = b;
                     sum += +b;
                 } else {
                     alert('Ошибка ввода, введите данные заново!');
                    i--;
                 }
        }
        expensesValue.textContent = sum;
        appData.expensesAll = sum;
        console.log(appData.expensesAll);
    });
    
    utvBtn2ExpNeob.addEventListener('click', function () {
        for (let i = 0; i < altRashod.length; i++) {
            let opt = altRashod[i].value;
            appData.optionalExpenses[i] = opt;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        } 
    });
    
    rasscBtn.addEventListener('click', function() {
        if(appData.mon != undefined) {
            appData.moneyPerDay = ((appData.mon-appData.expensesAll)/30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;
            
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Minimum level of money";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Average level of money";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "High level of money";
            } else {
                levelValue.textContent = "Error !!!";
            }
        } else {
            daybudgetValue.textContent = "Произошла ошибка!!!";
        }
     });

    

     chooseIncome.addEventListener('input', function () {
        let items = chooseIncome.value;
        appData.income = items.split(',');
        incomeValue.textContent = appData.income;
     });
 
     chkBox.addEventListener('click', function() {
        if(appData.savings !== true) {
            appData.savings = false;
        } else {appData.savings = true;}

     });

     chooseSum.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;

                appData.monthIncome = sum/100/12*percent;
                appData.yearIncome = sum/100*percent;

                monthsavingsValue.textContent = appData.monthIncome.toFixed(2);
                yearsavingsValue.textContent = appData.yearIncome.toFixed(2);

        }
    });

    choosePercent.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            console.log(appData.monthIncome, appData.yearIncome);

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

        }
    });

    let appData =  {
        mon: money,
        timeData: time,
        expenses: { },
        optionalExpenses: {},
        income:[],
        savings: false
    };
    
    
    
    
    
    
    
    
    // console.log(appData.optionalExpenses); 



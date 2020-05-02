let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    adv = document.getElementsByClassName('adv')[0],
    title = document.getElementById('title'),
    menuItemL = document.createElement('li'),
    vopros = document.querySelector('#prompt');

    menu.insertBefore(menuItem[2], menuItem[1]);

    menuItemL.classList.add("menu-item");
    menuItemL.textContent = "Пятый пункт";
    menu.appendChild(menuItemL);

    document.body.style.background = "url ('img/apple_true.jpg)";

    title.textContent = "Мы продаем только подлинную и дорогую технику Apple";

    adv.remove();

    let opinion = prompt("Ваше отношение к технике Apple");
    vopros.style.backgroundColor = 'magenta';
    vopros.textContent = opinion;




// document.body.replaceChild(menu[1], menu[2]);
// document.body.appendChild(menu[4]);

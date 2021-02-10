let item1 = {
    title: 'Buttermilk Pancakes',
    category: 'breakfast',
    price: 15.03,
    img: './img/item-1.jpeg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, unde?'
}

let item2 = {
    title: 'Diner',
    category: 'Lunch',
    price: 13.99,
    img: './img/item-2.jpeg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, unde?'
}

let item3 = {
    title: 'Godzilla Milkshake',
    category: 'Lunch',
    price: 6.99,
    img: './img/item-3.jpeg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, unde?'
}
let item4 = {
    title: 'Country Delight',
    category: 'Shakes',
    price: 20.99,
    img: './img/item-4.jpeg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, unde?'
}
let item5 = {
    title: 'Egg Attack',
    category: 'Shakes',
    price: 22.99,
    img: './img/item-5.jpeg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, unde?'
}
let item6 = {
    title: 'Egg Attack',
    category: 'breakfast',
    price: 22.99,
    img: './img/item-5.jpeg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, unde?'
}

/*
1. Набор данных (массив с элементами, объекты с данными)
   Данные для элемента списка
2. Вывести данные
   Получили блок food-menu
   Для каждого объекта из массива menu создали разметку 
    и вывели на странице элемент меню добавив в food-menu
3. Фильтрация элементов списка menu
   1. Обработать клик по одной из кнопок filter-btn (категория)
   2. В зависимости от кнопки по которой мы кликнули, 
      надо в массиве menu оставить только те элементы, 
      которые соответствуют выбранной категории (нажатой кнопке)
   3. Удалить все элементы из food-menu
      Для каждого объекта из массива menu создали разметку 
      и вывести на странице элемент меню добавив в food-menu
*/


//              0      1
const menu = [ item1, item2 , item3, item4, item5, item6];

let foodMenu = document.querySelector('.food-menu');



// Добавляли только один элемент в foodmenu
// foodMenu.innerHTML = `<article class="menu-item">
//                         <img class="item-foto" src="./img/item-1.jpeg" alt="">
//                         <div class="item-title-wrapper">
//                             <h2 class="item-title">${item1.title}</h2>
//                             <span class="item-price">${item1.price}</span>
//                         </div>
//                         <p class="item-text">${item1.description}</p>
//                     </article>`

// добавим сразу несколько элементов

function displayMenuItems(menuItems) {
    foodMenu.innerHTML = ''; // очистим содержимое foodMenu

    for (let i=0; i < menuItems.length; i += 1) {
        let item = menuItems[i];
        console.log(item.img);

        foodMenu.innerHTML = foodMenu.innerHTML + `<article class="menu-item">
                            <img class="item-foto" src="${item.img}" alt="">
                            <div class="item-info">
                                <div class="item-title-wrapper">
                                    <h2 class="item-title">${item.title}</h2>
                                    <span class="item-price">${item.price}</span>
                                </div>
                                <p class="item-text">${item.description}</p>
                            </div>
                        </article>`
    }
}

// event - содержать инфу о событии клика
// параметр event можем задать только когда передаем функцию в addEventListener
function onFilterBtn(event) {   
    let filterBtn = event.target; // достаем кнопку по которой кликнули
    let category = filterBtn.dataset.category; //  берем инфу из атрибута data-category
    
    if (category == 'all') {
        displayMenuItems(menu);
        return; // выход из функции
    }

    let newMenu = []; // сдесь сохраним отфильтрованные элементы мену в завис. от выбр. категории

    for (let i=0; i < menu.length; i += 1) {
        let item = menu[i];
        console.log(category, item.category)
        if (category == item.category.toLowerCase()) {
            // console.log('найдено ', category, item.category)
            newMenu.push(item);
        }
    }
    displayMenuItems(newMenu);
}

var categoryBtns = document.querySelectorAll('.filter-btn');

for (let i=0; i < categoryBtns.length; i += 1) {
    let btn = categoryBtns[i];
    btn.addEventListener ('click', onFilterBtn);
}





displayMenuItems(menu);

var elShoppingListForm = document.querySelector(".shopping-list-form");
var elShoppingListInput = elShoppingListForm.querySelector(".shopping-list-input");
var elShoppingList = document.querySelector(".shopping-list");
var elShoppingCheckbox = document.querySelector('.js-checkbox');

var shoppingList = [];

elShoppingListForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    
    if (elShoppingCheckbox.checked) {
        shoppingList.unshift(elShoppingListInput.value.trim());
        console.log(shoppingList);
     
    } else {
        shoppingList.push(elShoppingListInput.value.trim());
        console.log(shoppingList);
    };

    shoppingList.push(elShoppingListInput.value.trim());
    elShoppingListInput.focus();
    elShoppingList.innerHTML = "";

    for (var product of shoppingList) {
        var newElPruduct = document.createElement("li");
        newElPruduct.textContent = product;
        elShoppingList.appendChild(newElPruduct);
    }
    elShoppingListInput.value = "";
   
});





var elShoppingCheckForm = document.querySelector('.shopping-check-form');
var elShoppingCheckInput = document.querySelector('.shopping-check-input');
var elShoppingResult = document.querySelector('.check-result');

elShoppingCheckForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (shoppingList.includes(elShoppingCheckInput.value.trim())) {
        elShoppingResult.innerHTML = "Bor"
    } else {
        elShoppingResult.innerHTML = 'Yo`q';
        elShoppingListInput.value = elShoppingCheckInput.value;
        elShoppingCheckInput.value = "";
        elShoppingListInput.focus();
    }
});




/*=====================================================*/
// var books = [
//     { name: 'O`tgan kunlar', rating: 8 },
//     { name: 'Kecha va kunduz', rating: 5 },
//     { name: 'Sherlok Holms', rating: 2 },
//     { name: 'Al-Kimyogar', rating: 6 },
// ];

// // books.every( (book) => {
// //   return book.rating >= 3;
// // })

// var goodBooks = [];
// books.forEach((book) => {
//     if (book.rating >= 3) {
//         goodBooks.push(book);
//     }
// });

// goodBooks;

// var isAllBooksGood = false;
// if (goodBooks.length === books.length) {
//     isAllBooksGood = true;
// }
// isAllBooksGood;


/*===================Qiymatdan nusxa olish================================*/

// let name1 = 'Alisher';
// let name2 = name1;

// name1;
// name2;

// name2 = 'bobur';

// name1;
// name2;


// /*=================== COPY ================================*/
// var game = {
//     name: 'GTA',
//     rating: 8,
//     year: 2004,
//     publisher: 'Rocket Games',
//     author: 'Company1',
// }
// var anotherGame = game;

// game;
// anotherGame;

// anotherGame.year = 2002;
// anotherGame.name = 'CS:GO';

// /*=================== ICHMA ICH IF/FUNCTION ICHIDA ================================*/
// var client = true;
// var experience = 3;
// var money = 5000;

// var getAnswer = () => {
//     if (!client) {
//         console.log('Boreee');
//         return;
//     }
//     if (experience < 3) {
//         console.log('Keyinroq keling'); 
//         return;
//     }

//     if (money < 7000) {
//         console.log('Puliz kamakan');
//         return;
//     }

//     console.log('kiravering')
// }

// getAnswer();

// if (client) {
//   if(experience >= 3) {
//     if(money >= 7000) {
//       console.log('Kirishingiz mumkin');
//     }else {
//       console.log ('Puliz kamakan');
//     }
//   }else {
//     console.log('Keyinroq keling');
//   }
// } else {
//   console.log('Boreee');
// }
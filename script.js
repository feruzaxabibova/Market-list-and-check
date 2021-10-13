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





let plates = getPlates();
let drinks = getDrinks();
let desserts = getDesserts();
let order = document.querySelector('.order');

function getPlates() {
    return document.getElementsByClassName('container-choice comida');
}

function getDrinks() {
    return document.getElementsByClassName('container-choice drink');
}
function getDesserts() {
    return document.getElementsByClassName('container-choice dessert');
}
function getSelections() {
    return document.getElementsByClassName('selecionado');
}

function checkPlate(){
    for (i = 0; i < plates.length; i++) {
        if (plates[i].classList.contains('selecionado')) {
            return true;
        }
    }
    return false;
}

function checkDrink(){
    for (i = 0; i < drinks.length; i++) {
        if (drinks[i].classList.contains('selecionado')) {
            return true;
        }
    }
    return false;
}

function checkDessert(){
    for (i = 0; i < desserts.length; i++) {
        if (desserts[i].classList.contains('selecionado')) {
            return true;
        }
    }
    return false;
}

function checkOrder(){
    if(checkPlate()==true && checkDrink()==true && checkDessert()==true){
        return true;
    }
    else{
        return false;
    }
}

function selectOptionFood(value) {
    const selected = document.querySelector(value);

    for (i = 0; i < plates.length; i++) {
        if (plates[i].classList.contains('selecionado')) {
            plates[i].classList.remove('selecionado');
        }
    }

    selected.classList.add('selecionado');

    if (checkOrder() == true){
        canOrder();
    }
}

function selectOptionDrink(value) {
    const selected = document.querySelector(value);

    for (i = 0; i < drinks.length; i++) {
        if (drinks[i].classList.contains('selecionado')) {
            drinks[i].classList.remove('selecionado');
        }
    }

    selected.classList.add('selecionado');
    if (checkOrder() == true){
        canOrder();
    }
}

function selectOptionDessert(value) {
    const selected = document.querySelector(value);

    for (i = 0; i < desserts.length; i++) {
        if (desserts[i].classList.contains('selecionado')) {
            desserts[i].classList.remove('selecionado');
        }
    }

    selected.classList.add('selecionado');

    if (checkOrder() == true){
        canOrder();
    }
}
function canOrder(){
    order.classList.add('can-order');
    order.innerHTML = "Fechar pedido";
}

function makeOrder(){
    if (order.classList.contains('can-order')){
        let navigate = document.querySelector('.hidden')
        navigate.classList.remove('hidden');
    }
}
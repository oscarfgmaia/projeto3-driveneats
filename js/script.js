let plates = getPlates();
let drinks = getDrinks();
let desserts = getDesserts();
let order = document.querySelector('.order');
let plateOrder;
let drinkOrder;
let dessertOrder;
let platePrice;
let drinkPrice;
let dessertPrice;
let totalValue;
let personalName;
let personalAddress;

function getPlates() {
    return document.getElementsByClassName('choosed-plate comida');
}

function getDrinks() {
    return document.getElementsByClassName('choosed-plate drink');
}

function getDesserts() {
    return document.getElementsByClassName('choosed-plate dessert');
}

function getSelections() {
    return document.getElementsByClassName('selecionado');
}

function checkPlate() {
    for (i = 0; i < plates.length; i++) {
        if (plates[i].classList.contains('selecionado')) {
            return true;
        }
    }
    return false;
}

function checkDrink() {
    for (i = 0; i < drinks.length; i++) {
        if (drinks[i].classList.contains('selecionado')) {
            return true;
        }
    }
    return false;
}

function checkDessert() {
    for (i = 0; i < desserts.length; i++) {
        if (desserts[i].classList.contains('selecionado')) {
            return true;
        }
    }
    return false;
}

function checkOrder() {
    if (checkPlate() == true && checkDrink() == true && checkDessert() == true) {
        return true;
    }
    else {
        return false;
    }
}

function selectOptionFood(value) {
    const selected = document.querySelector(value);

    for (i = 0; i < plates.length; i++) {
        if (plates[i].classList.contains('selecionado')) {
            plates[i].classList.remove('selecionado');
            let a = plates[i].querySelector('.check')
            a.classList.add('hidden')
        }
    }
    selected.classList.add('selecionado');
    let b = selected.querySelector('.hidden')
    b.classList.remove('hidden')

    if (checkOrder() == true) {
        canOrder();
    }
}

function createCheckMark() {
    let a = document.createElement('ion-icon'); // generate node
    a.setAttribute('name', 'checkmark-circle');         // set attribute
    selected.appendChild(a);        // use the node
}

function selectOptionDrink(value) {
    const selected = document.querySelector(value);

    for (i = 0; i < drinks.length; i++) {
        if (drinks[i].classList.contains('selecionado')) {
            drinks[i].classList.remove('selecionado');
            let a = drinks[i].querySelector('.check')
            a.classList.add('hidden')
        }
    }
    selected.classList.add('selecionado');
    let b = selected.querySelector('.hidden')
    b.classList.remove('hidden')

    selected.classList.add('selecionado');
    if (checkOrder() == true) {
        canOrder();
    }
}

function selectOptionDessert(value) {
    const selected = document.querySelector(value);

    for (i = 0; i < desserts.length; i++) {
        if (desserts[i].classList.contains('selecionado')) {
            desserts[i].classList.remove('selecionado');
            let a = desserts[i].querySelector('.check')
            a.classList.add('hidden')
        }
    }
    selected.classList.add('selecionado');
    let b = selected.querySelector('.hidden')
    b.classList.remove('hidden')
    if (checkOrder() == true) {
        canOrder();
    }
}
function canOrder() {
    order.classList.add('can-order');
    order.innerHTML = "Fechar pedido";
}

function getOrder(element) {
    for (i = 0; i < plates.length; i++) {
        if (plates[i].classList.contains('selecionado')) {
            plateOrder = plates[i].getElementsByTagName('div')[0].getElementsByTagName('div')[1].innerHTML;
            platePrice = plates[i].getElementsByTagName('div')[0].getElementsByTagName('div')[5].innerHTML;

        }
    }

    for (i = 0; i < drinks.length; i++) {
        if (drinks[i].classList.contains('selecionado')) {
            drinkOrder = drinks[i].getElementsByTagName('div')[0].getElementsByTagName('div')[1].innerHTML;
            drinkPrice = drinks[i].getElementsByTagName('div')[0].getElementsByTagName('div')[5].innerHTML;

        }
    }

    for (i = 0; i < desserts.length; i++) {
        if (desserts[i].classList.contains('selecionado')) {
            dessertOrder = desserts[i].getElementsByTagName('div')[0].getElementsByTagName('div')[1].innerHTML;
            dessertPrice = desserts[i].getElementsByTagName('div')[0].getElementsByTagName('div')[5].innerHTML;

        }
    }
}

function refreshSummary() {
    let summaryItem = document.querySelector('.item1');
    summaryItem.getElementsByTagName('span')[0].innerHTML = plateOrder;
    summaryItem.getElementsByTagName('span')[1].innerHTML = platePrice;

    summaryItem = document.querySelector('.item2');
    summaryItem.getElementsByTagName('span')[0].innerHTML = drinkOrder;
    summaryItem.getElementsByTagName('span')[1].innerHTML = drinkPrice;

    summaryItem = document.querySelector('.item3');
    summaryItem.getElementsByTagName('span')[0].innerHTML = dessertOrder;
    summaryItem.getElementsByTagName('span')[1].innerHTML = dessertPrice;


    platePrice = Number(platePrice.replaceAll(',', '.'));
    drinkPrice = Number(drinkPrice.replaceAll(',', '.'));
    dessertPrice = Number(dessertPrice.replaceAll(',', '.'));

    let summaryValueTotal = document.querySelector('.valor-total');
    totalValue = platePrice + drinkPrice + dessertPrice;
    let totalValueStr = totalValue.toFixed(2).toString()

    summaryValueTotal.innerHTML = totalValueStr.replaceAll('.', ',');
}

function makeOrder() {
    if (order.classList.contains('can-order')) {
        let navigate = document.querySelector('.hidden')
        navigate.classList.remove('hidden');
        getOrder();
        refreshSummary();
    }
}

function backToMainScreen() {
    let temp = document.querySelector('.summary');
    temp.classList.add('hidden');
    temp = document.querySelector('.personal-info');
    temp.classList.add('hidden');
}

function acceptOrder() {
    let totalValueStr = totalValue.toFixed(2).toString();
    personalName = document.getElementById("personal-name").value;
    personalAddress = document.getElementById("personal-address").value;
    let orderStr = `Olá, gostaria de fazer o pedido:
- Prato: ${plateOrder.toString()}
- Bebida: ${drinkOrder}
- Sobremesa: ${dessertOrder}
Total: R$ ${totalValueStr}

Nome: ${personalName}
Endereço: ${personalAddress}`;
    let uri = orderStr;
    let orderEncoded = encodeURIComponent(uri);
    let whatsapp = "https://wa.me/5581999252520?text=" + orderEncoded;
    window.open(whatsapp, '_blank').focus();
}

function askPersonalInfo(){
    let temp = document.querySelector('.personal-info')
    temp.classList.remove('hidden')

}
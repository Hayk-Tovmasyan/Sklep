const phones = [
    { productName: "Iphone 14 Pro", price: 5000, imageUrl: 'images/iphone14pro.jfif' },
    { productName: "Iphone 14", price: 4200, imageUrl: 'images/iphone14.jfif' },
    { productName: "Motorola g20", price: 1500, imageUrl: 'images/motorolag20.jfif' },
    { productName: "One Plus 10", price: 3500, imageUrl: 'images/oneplus10.jfif' },
    { productName: "Pixel 6", price: 3500, imageUrl: 'images/pixel6.jfif' },
    { productName: "Poco X4 Pro", price: 2250, imageUrl: 'images/pocox4pro.jfif' },
    { productName: "Redmi K 40 Pro", price: 2500, imageUrl: 'images/redmik40pro.jfif' },
    { productName: "Samsung a73", price: 3250, imageUrl: 'images/samsunga73.jfif' },
    { productName: "Samsung Galaxy s22", price: 3400, imageUrl: 'images/samsunggalaxys22.jfif' },
    { productName: "Xiaomi 12", price: 2500, imageUrl: 'images/xiaomi12.jfif' },
]

const mainElem = document.querySelector('main');

function createCard(prod) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('product');
    newDiv.innerHTML =
    `
    <div class='prod_image'>
        <img src='${prod.imageUrl}' alt='${prod.productName}'>
    </div>
    <div class='prod_text'>${prod.productName}</div>
    <div class='prod_price'>${prod.price}zł</div>
    <div class='list_button' onclick=toggleList() >Add to List</div>
    `;
    mainElem.appendChild(newDiv);
}

for (let i = 0; i < phones.length; i++) {
    createCard(phones[i])
}

// Search

let search = document.querySelector("input[type='search']");
let button = document.querySelector("input[type='button']");

button.addEventListener("click", function () {

    let phonesCopy = phones;
    phonesCopy = phonesCopy.filter((value) => {
        if (value.productName.toLowerCase().includes(search.value.toLowerCase())) {
            return true;
        }
    })

    search.value = ""; // reset search

    mainElem.innerHTML = ''; //clear all cards

    for (let i in phonesCopy) {
        createCard(phonesCopy[i])
    }

    if (phonesCopy.length == 0) {
        mainElem.innerHTML = "Nothing was found";
    }

})

//list

const listItems = [];
let cards = document.querySelectorAll(".list_button");

function toggleList(){
    console.log(event);
}
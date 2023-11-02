let listProductHTML = document.querySelector('#cart-box');

let listProducts = [];




document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.querySelector('ul');
    if (menu.style.right === '0px') {
        menu.style.right = '-3000px';
    } else {
        menu.style.right = '0px';
    }
});

document.addEventListener('click', function(event) {
    var menu = document.querySelector('ul'); // Assuming you have an id for the ul element
    var menuIcon = document.getElementById('hamburger'); 
    var li = document.getElementById('not');
    // Assuming you have an id for the hamburger icon

    if (menu.style.right === '0px' && event.target !== menu && event.target !== menuIcon && event.target !== li ) {
        menu.style.right = '-3000px';
    }
});

var cartBtn = document.getElementById('cart-btn');

cartBtn.addEventListener('click', function() {
    var cart = document.querySelector('.cart');

    cart.style.right = '0px';

});

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(carts.length > 0 ){
        carts.forEach(cart => {
            let newCart.classList.add('item');
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            let info = listProducts[positionProduct];
            newCart.innerHTML = `
            <img src="${info.image}" alt="">
            <div class="des">
              <span class="brands-name">${info.name}</span>
              <h5>PLAIN WHITE T-SHIRT
              </h5>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="sm-box">
                <h4>rs${info.price * cart.quantity}</h5>
        
        
              </div>
            </div>
            <div class="more">
              <button>add</button>
              <span>${cart.quantity}</span>
              <button>remove</button>
            </div>  
            `;
            listCartHTML.appendChild(newCart);

        })
    }

}

const initApp = () => {
fetch('products.json')
.then(res => res.json())
.then(data =>{
    listProducts = data;
addDataToHTML();
    
})

}


initApp();



















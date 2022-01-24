
    var Productlist = [
    {   ProductId : 1,
        ProductName : "Accusantium Dolorem1",
        ProductPrice : 46.00,
        ProductImg :  "images/product/large-size/1.jpg",
        ProductDescription: '100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, ',
        incart : 0
    } ,
    {    ProductId : 2,
        ProductName : "Mug Today is A Good Day",
        ProductPrice : 71.00,
        ProductImg :  "images/product/large-size/2.jpg",
        ProductDescription: '100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, ',
        incart : 0
    } ,
    {    ProductId : 3,
        ProductName : "Accusantium Dolorem1",
        ProductPrice : 46.00,
        ProductImg :  "images/product/large-size/1.jpg",
        ProductDescription: '100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, ',
        incart : 0
    } 
];
var NumberOfCartArray;
var AddCart = document.querySelectorAll('.cart');
 var TotalCartAmount = document.querySelector('.total-cart-amount');
 var numbersincart = document.querySelectorAll('numbersincart');
var NumbersOfCart = document.querySelector('.numbers-of-cart');
var totalamountofproducts = document.querySelector('.totalamountofproducts');
var i = ' <i class="fa fa-close"></i>';

var number;
var CartInfoArray = [];

for (let index = 0; index < AddCart.length; index++) {
   AddCart[index].addEventListener('click', event =>{  
    var pn = Productlist[index].ProductName;
    var pp =Productlist[index].ProductPrice;
    var pi =  Productlist[index].ProductImg;
     NumberOfCartAdded ();
     CartAmountCalculator(pp);
     CartInfo(Productlist[index]);
     cart_dropdown();

   })
}

function onLoadCartNumber () {
    var numofcart = localStorage.getItem('cartadded');
    var TotalCart = localStorage.getItem('cartTotalAmount');
   var CartProductInfo = localStorage.getItem('cartInfo');

   if( numofcart && TotalCart && CartProductInfo) {
       TotalCartAmount.textContent = TotalCart;
       NumbersOfCart.textContent = numofcart;
       totalamountofproducts.textContent = 'N'+TotalCart;
       cart_dropdown();
       
    }
}

//    function CartInfo (info) {
//      var  CartProductInfo = localStorage.getItem('cartInfo');
//      CartProductInfo = JSON.stringify(info);   
//      if(CartProductInfo != null){
//         localStorage.setItem('cartInfo',   CartProductInfo);
        
//     }else {
//         CartInfoArray.push(JSON.stringify(info));
//         localStorage.setItem('cartInfo', CartInfoArray);
//     }
     
//    }
function CartInfo (Productinfo) 
{
    var CartProductInfo = localStorage.getItem('cartInfo');
     cartItems = JSON.parse(CartProductInfo);
    
    if( CartProductInfo != null){
        if (cartItems[Productinfo.ProductName] == undefined) 
        {

            cartItems = {
                ...cartItems,
                [Productinfo.ProductName]:Productinfo
            }
        }
            cartItems[Productinfo.ProductName].incart += 1;
       

    }else{
        Productinfo.incart = 1;
        var cartItems = {
            [Productinfo.ProductName]: Productinfo
        }
    }

 
    localStorage.setItem('cartInfo', JSON.stringify(cartItems));
 
}


function NumberOfCartAdded () 
{   
        var numofcart = localStorage.getItem('cartadded');
        var changetype = parseInt(numofcart);
        if(numofcart != null){
        localStorage.setItem('cartadded', changetype + 1);
        NumbersOfCart.textContent = changetype + 1;  
        }
        else {
            localStorage.setItem('cartadded', 1);
        NumbersOfCart.textContent =  1;
        }
}

function  CartAmountCalculator (pp) 
{   
    var TotalCart = localStorage.getItem('cartTotalAmount');
    if(TotalCart != null){
       var CartTotal = parseInt(TotalCart);
       localStorage.setItem('cartTotalAmount', CartTotal + pp);
       TotalCartAmount.textContent = CartTotal + pp ;
       totalamountofproducts.textContent = CartTotal + pp;
    }
    else {
      localStorage.setItem('cartTotalAmount', pp);
      TotalCartAmount.textContent = pp ;
      totalamountofproducts.textContent = pp;
    }
}

function cart_dropdown () {
    var  ul = document.querySelector('.minicart-product-list'); 
    var cartDropdown = localStorage.getItem('cartInfo');
    cartDropdown = JSON.parse(cartDropdown);
    ul.innerHTML = '';
    if(cartDropdown && ul) {
        Object.values(cartDropdown).map(item => {
           var totalproduct = item.ProductPrice * item.incart;
           var changeItem = JSON.stringify(item);
          precision(totalproduct);
            ul.innerHTML += `
            <li>
            <a href="single-product.html" class="minicart-product-image">
                <img src="${item.ProductImg}" alt="cart products">
            </a>
            <div class="minicart-product-details">
                <h6><a href="single-product.html">${item.ProductName}</a></h6>
                <span> N ${totalproduct}.00 x <span class="numbersincart">${item.incart}</span></span>
            </div>
            <button class="close" onclick="removecart(${item})">
                <i class="fa fa-close" ></i>
            </button>
        </li>
        `

            }
            
            );
    }else{
        ul.innerHTML = '<li>no product added to cart</li>';
    }
 
}

function precision (x ) {
    return Number.parseFloat(x).toPrecision(4);
}

  function removecart (cartInfo) {
    var numofcart = localStorage.getItem('cartadded');
    var TotalCart = localStorage.getItem('cartTotalAmount');
   var CartProductInfo = localStorage.getItem('cartInfo');

   if( numofcart && TotalCart && CartProductInfo) {
       console.log(cartInfo);
    }
  }

 onLoadCartNumber ();

//     AddCart.forEach(item => {
//     item.addEventListener('click', event => {

 
//     console.log(ItemAmount);
//     console.log(ProductName);
    

//      NumberOfCartArray ++;
//     TotalCartAmount.innerText = ItemAmount;
//     NumbersOfCart.innerHTML = NumberOfCartArray;
//     var i = ' <i class="fa fa-close"></i>';

//    var  ul = document.querySelector('.minicart-product-list');     
//     var li = document.createElement('li');
//     var a = document.createElement('a')
//     var image = document.createElement('img');
//     var div = document.createElement('div');
//     var h6 = document.createElement('h6');
//     var a_name = document.createElement('a');
//     var span_amount = document.createElement('span');
//     var Close = document.createElement('button');

//     a_name.innerHTML = ProductName;
//     span_amount.innerHTML = ItemAmount;
//     image.src = ImageName;
//     Close.innerHTML = i;
//     a.classList.add("minicart-product-image");
//     div.classList.add("minicart-product-details");
//     Close.classList.add('close');
//     a_name.style.fontSize ='12px';
    
//     console.log(image);
//      a.append(image);
//      h6.appendChild(a_name);
//      div.append(h6, span_amount, Close);
//      li.append(a, div);
//      ul.append(li);
    
//     })
//   })


//   if(AddCart.innerText === "In cart"){
//     console.log(incart);
//  }else{
//      console.log("not in cart");
//  }

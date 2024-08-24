let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () =>{
   account.classList.add('active');
}

document.querySelector('#close-account').onclick = () =>{
   account.classList.remove('active');
}

let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () =>{
   myOrders.classList.add('active');
}

document.querySelector('#close-orders').onclick = () =>{
   myOrders.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () =>{
   cart.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   myOrders.classList.remove('active');
   cart.classList.remove('active');
};

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next(){
   slides[index].classList.remove('active');
   index = (index + 1) % slides.length;
   slides[index].classList.add('active');
}

function prev(){
   slides[index].classList.remove('active');
   index = (index - 1 + slides.length) % slides.length;
   slides[index].classList.add('active');
}

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
   acco.onclick = () =>{
      accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});


function calculateBill() {
   var vQty = parseFloat(document.getElementById("veg").value);
   var nvQty = parseFloat(document.getElementById("nonveg").value);
   var dQty = parseFloat(document.getElementById("drinks").value);

   var vp = 250;
   var nvp = 500;
   var dp = 150;



   function vcost1(){
      return vQty * vp;
   }

   function nvcost1(){
      return nvQty * nvp;
   }

   function dcost1(){
      return dQty * dp;
   }

   function tcost(){
   return  vcost1()+ nvcost1() + dcost1();
   }
   let Window1;

   Window1=window.open("", "myWindow", "width=300px, height=300px");

   Window1.document.write('<html><head><title>Bill</title><link rel="stylesheet" type="text/css" href="css/bill.css"></head><body>');

   Window1.document.write("<div><h3><center><u><b><h1>Bill</h1></u> Veg pizzas cost: "+vcost1()+"<br> Non-Veg pizzas cost: "+nvcost1()+"<br>Drinks cost: " +dcost1()+"<br><br>----------------------------------------------<br>Total cost: "+tcost()+"</center></b></h3><br></div>");

}

function abc(){window.alert("You have Registered!!")}

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

menu.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};

function order_open() {
  console.log(document.getElementById("order-open").style.display);
  if (document.getElementById("order-open").style.display === "block") {
    document.getElementById("order-open").style.display = "none";
  } else {
    document.getElementById("order-open").style.display = "block"
  }
};

function order_close() {
  document.getElementById("order-open").style.display = "none";
}
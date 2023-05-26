function handleMinus() {
    var input = document.getElementById("amount");
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
}
function handlePlus() {
    var input = document.getElementById("amount");
    var value = parseInt(input.value);
    input.value = value + 1;
}
window.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("amount");
    input.value = "1";
});
function scrollRight() {
    var productContainer = document.querySelector('.product-container');
    productContainer.classList.add('show-product-option-4');
  }
  
  function scrollLeft() {
    var productContainer = document.querySelector('.product-container');
    productContainer.classList.remove('show-product-option-4');
  }
  
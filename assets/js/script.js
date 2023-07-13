function cal(){
  quantity = document.querySelector("#quantity")
  if (quantity.value < 1) { quantity.value == 0 }
  color = document.querySelector("#color")
  price = document.querySelector("p .price")
  total = new Intl.NumberFormat("de-DE").format(price.innerHTML * quantity.value)
  document.querySelector(".cart-price").innerHTML = total
  document.querySelector(".cart-quantity").innerHTML = quantity.value
  document.querySelector(".cart-color").style.backgroundColor = color.value
}

function cal(){
  quantity = document.querySelector("#quantity")
  color = document.querySelector("#color")
  price = document.querySelector("p .price")
  
  cartTotal = document.querySelector(".cart-price")
  cartQuantity = document.querySelector(".cart-quantity")
  cartColor = document.querySelector(".cart-color")

  total = new Intl.NumberFormat("de-DE").format(price.innerHTML * quantity.value)
  
  cartTotal.innerHTML = total
  cartQuantity.innerHTML = quantity.value
  cartColor.style.backgroundColor = color.value
}

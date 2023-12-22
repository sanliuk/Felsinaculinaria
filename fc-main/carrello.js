$(document).ready(function() {
  
  // Ricuperiamo il carrello dal localStorage quando la pagina si carica
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  cart.forEach(item => {
      addToCartUI(item.product, item.price);
  });

  // Aggiungi l'articolo al carrello quando il pulsante viene cliccato
  $('.add-to-cart').click(function() {
      const product = $(this).data('product');
      const price = $(this).data('price');
      addToCart(product, price);
  });
});

function addToCart(product, price) {
  // Aggiungi l'articolo all'array del carrello
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({product, price});
  
  // Salva l'array del carrello nel localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Aggiorna l'interfaccia del carrello
  addToCartUI(product, price);
}

function addToCartUI(product, price) {
  const item = `<li>${product} - €${price}</li>`;
  $('#cart-items').append(item);
}

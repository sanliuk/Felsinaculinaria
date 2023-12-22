$(document).ready(function() {
  // Inizializza la textarea vuota
  $('textarea[name="messaggio"]').val('');

  // Carica gli articoli dal localStorage quando la pagina viene caricata
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      // Inserisci ogni articolo nella textarea
      $('textarea[name="messaggio"]').val(function(i, val) {
          return val + "\n" + item.name + " - " + item.price + "€";
      });
    });
  }
});

$(document).ready(function() {
    // Aggiungi un articolo al carrello
    $('.add-to-cart').click(function() {
        let itemName = $(this).attr('data-product');
        let itemPrice = $(this).attr('data-price');
        
        // Aggiungi l'articolo al carrello visivo
        $('#cart-items').append(`<li>${itemName} - ${itemPrice}€</li>`);

        // Salva l'articolo in localStorage
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push({name: itemName, price: itemPrice});
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Aggiorna dinamicamente la textarea dopo aver aggiunto un elemento al carrello
        $('textarea[name="messaggio"]').val(function(i, val) {
            return val + "\n" + itemName + " - " + itemPrice + "€";
        });
    });
});

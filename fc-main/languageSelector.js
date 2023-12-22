$(document).ready(function(){
  $(".language-selector .language img").click(function(){
    // Rimuove la classe 'selected' da tutte le immagini
    $(".language-selector .language img").removeClass("selected");

    // Aggiunge la classe 'selected' all'immagine cliccata
    $(this).addClass("selected");
  });
});

<?php
//per far funzionare il mailto bene latoserver quando verrà messo sukl server che support php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = strip_tags(trim($_POST['nome']));
    $email = strip_tags(trim($_POST['email']));
    $telefono = strip_tags(trim($_POST['telefono']));
    $data = strip_tags(trim($_POST['data']));
    $messaggio = strip_tags(trim($_POST['messaggio']));

    if (empty($nome) || empty($email) || empty($messaggio)) {
        echo "Tutti i campi obbligatori devono essere compilati.";
        exit;
    }

    $to = "lucabazzoni3@gmail.com";
    $subject = "Nuovo messaggio dal sito web";
    $message = "Nome: $nome\nEmail: $email\nTelefono: $telefono\nData: $data\nMessaggio: $messaggio";

    if (mail($to, $subject, $message)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "An error occurred while sending your message. Please try again later.";
    }
}

?>

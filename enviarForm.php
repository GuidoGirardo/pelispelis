<?php

    $texto = $_POST['texto'];

    $servername = "localhost";
    $username = "id21410063_guido";
    $password = "Guldo2004!";
    $dbname = "id21410063_noflix";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    $sql = "INSERT INTO coments (comentario) VALUES ('$texto')";

    if ($conn->query($sql) === TRUE) {
        echo "El texto se ha guardado en la base de datos correctamente.";
    } else {
        echo "Error";
    }

    header('https://noflixonline.000webhostapp.com/');

    $conn->close();
?>
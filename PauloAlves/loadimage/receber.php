<?php

if($_FILES):
    $arquivo = $_FILES['imagem'];
    if(move_uploaded_file($arquivo['tmp_name'], "./imagens/".$arquivo['name'])){
        echo "./imagens/".$arquivo['name'];
    }else{
        echo "erro";
    }
endif
?>
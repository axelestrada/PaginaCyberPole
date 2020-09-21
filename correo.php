<?php
    $to = 'cyberpole25@gmail.com';
    $nombre = $_POST["name"];
    $email = $_POST["email"];
    $mensaje = $_POST["message"];

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n";
    $headers .= "CC: " . $nombre . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $mensaje = '<table style="width:100%; font-family: sans-serif; color: rgb(219, 218, 218); font-weight: 500; background: #060c21; border-radius: 5px; padding: 20px; width: 400px;">
    
    <tr>
        <td>'.$nombre.'</td>
    </tr>
    <tr>
        <td>Email: '.$email.'</td>
    </tr>
    <tr>
        <td>Mensaje: '.$mensaje.'</td>
    </tr>

</table>';    

    if (@mail($to, $email, $mensaje, $headers))
    {
        echo 'Mail Enviado';
    }else{
        echo 'Oh oh, algo salio mal !.';
    }
 
?> 
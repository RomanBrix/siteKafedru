<?php
   $to = 'kafedra.pis@gmail.com';
   if (array_key_exists('email', $_POST)) {

       $subject = 'Пользователь подписался на обновления ';
       $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
       $message = "Email: ".$_POST['email'];
       mail($to, $subject, $message);

   } elseif (array_key_exists('name', $_POST)) {

       $subject = 'Задает вопрос '.$_POST['name'];
       $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
       $message = "Вопрос:\n".$_POST['msg']."\n\nОтвет прислать на: ".$_POST['msgEmail'];
       mail($to, $subject, $message);

     } else{
      	     echo ('Не стоило сюда заходить, по тебя уже выехал');
           }

?>

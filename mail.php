<?php 

$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['tel'];
$message = $_POST['message'];
$mail->Body = "Поступила заявка от $name\nТелефон $phone\nСообщение: $message";
$mail->Body = wordwrap($mail->Body, 70);


var_dump(mail('info@anna-developer.ru', 'Заявка с сайта', $mail->Body));


?>
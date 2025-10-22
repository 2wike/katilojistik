<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $isim = htmlspecialchars($_POST['isim']);
    $telefon = htmlspecialchars($_POST['telefon']);
    $email = htmlspecialchars($_POST['email']);
    $mesaj = htmlspecialchars($_POST['mesaj']);

    $to = "mehmetcem32@gmail.com"; // Buraya formdan gelen mesajları alacak mail adresini yaz
    $subject = "Yeni Teklif Talebi: $isim";
    
    $body = "İsim Soyisim: $isim\n";
    $body .= "Telefon: $telefon\n";
    $body .= "E-posta: $email\n";
    $body .= "Mesaj:\n$mesaj\n";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n";

    if(mail($to, $subject, $body, $headers)) {
        echo "<h2>Mesajınız gönderildi, teşekkürler!</h2>";
    } else {
        echo "<h2>Bir hata oluştu. Lütfen tekrar deneyin.</h2>";
    }
} else {
    echo "<h2>Formdan gelmediniz!</h2>";
}
?>

<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se o usuário e a senha estão corretos (em um caso real, você usaria um banco de dados para isso)
    $username = "user";
    $password = "pass";

    if ($_POST["username"] === $username && $_POST["password"] === $password) {
        // Login bem-sucedido, redireciona para a página de script
        header("Location: script.html");
        exit;
    } else {
        // Login inválido, exibe uma mensagem de erro
        echo "<p>Usuário ou senha incorretos.</p>";
    }
}
?>

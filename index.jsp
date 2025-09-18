<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cantina da Escola</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Bem-vindo à <%= request.getAttribute("nomeCantina") %></h1>
        <p>Temos <%= request.getAttribute("salgados") %> salgados disponíveis.</p>
        <p>Cada salgado custa R$<%= request.getAttribute("precoSalgado") %></p>
        <div class="resultado">
            <p>Agora restam <%= request.getAttribute("salgados") %> salgados.</p>
            <p>A cantina vendeu R$<%= request.getAttribute("totalVendido") %>.</p>
        </div>
    </div>
</body>
</html>

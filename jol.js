<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Zadanie JS</title>
</head>
<body>

<script>
let p = document.createElement("p");
p.textContent = "lubie placki";

p.onclick = function () {
    p.textContent = "Filip";
};

document.body.appendChild(p);
</script>

</body>
</html>

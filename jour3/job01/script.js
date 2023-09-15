let value1 = parseFloat(prompt("Entrez le premier nombre"));
let value2 = parseFloat(prompt("Entrez le second nombre"));

while (isNaN(value1) || isNaN(value2)) {
    alert("Veuillez entrez des nombres.");

    value1 = parseFloat(prompt("Entrez le premier nombre"));
    value2 = parseFloat(prompt("Entrez le second nombre"));
}

alert("Addition : " + (value1 + value2));
alert("Soustraction : " + (value1 - value2));
alert("Multiplication : " + (value1 * value2));
alert("Division : " + (value1 / value2));
//  FONCTION CLASSIQUE
function addition(number1, number2) {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (isNaN(number1) || isNaN(number2)) {
        return "Veuillez entrez des nombres valides";
    } else {
        return number1 + number2;
    }
}

console.log(addition(4, -1.1));
console.log(addition(8, 34));
console.log(addition("a", 2));

// FONCTIONS FLÉCHÉES
const getStringLength = str => {
    if (typeof str !== "string") {
        return "Veuillez entrer une chaîne de caractères";
    } else if (str.length === 0) {
        return "Veuillez entrer une chaîne non vide";
    } else {
        return str.length;
    }
}

console.log(getStringLength("hello"));
console.log(getStringLength(1));
console.log(getStringLength());
console.log(getStringLength(""));
console.log(getStringLength("4654654"));

const arrayTest = ["hello", 1, null, "", "4654654"];

// Exemple d'utilisation dans un callback
console.log(arrayTest.map(getStringLength));

// Exemple d'utilisation d'une fonction anonyme dans un callback
console.log(arrayTest.map(str => {
    if (typeof str !== "string") {
        return "Veuillez entrer une chaîne de caractères";
    } else if (str.length === 0) {
        return "Veuillez entrer une chaîne non vide";
    } else {
        return str.length;
    }
}));

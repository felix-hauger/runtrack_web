const arr =  [1, "coucou", false, -7, 8.9];

const arrModified = ["bonjoir", ...arr, "bye"];

arrModified.shift();

alert(arrModified[arrModified.length - 1]);
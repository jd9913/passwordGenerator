//functionality of generating code

//function to get a random lower case number  going to use CharCode to get the codes from the browser characther set.
//codes:  http://www.net-comber.com/charset.html  //Char code set--lowercase letters 97-122; uppercase letters:65-90; numbers:48-57; symbols: 33-46, 63,64,91-96


var symbols = "!@#$%^&*(){}[]=<>/,.";

function getRandomLower() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97)); //generate a random decimal, multiplied by 26 (total number of letters in the alphabet) add 97 to get into the lower case letter range of the character set.
    }

function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
}

function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());
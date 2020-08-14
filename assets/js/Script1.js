//functionality of generating code

//function to get a random lower case number  going to use CharCode to get the codes from the browser characther set.
//codes:  http://www.net-comber.com/charset.html  //lowercase letters 97-122

function(getRandomLower) {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97)); //generate a random decimal, multiplied by 26 (total number of letters in the alphabet) add 97 to get into the lower case letter range of the character set.
    }

function(getRandomUpper) {
    return string.fromCharCode((Math.floor(Math.random()*26)+))
}
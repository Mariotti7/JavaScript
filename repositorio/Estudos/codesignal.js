function centuryFromYear(year) {
    let century = Math.floor((year - 1) / 100) + 1
    return `Ano: ${year} | Século: ${century}`

}
console.log(centuryFromYear(2000))

// ======================================

function checkPalindrome(inputString) {
    var len = inputString.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (inputString[i] !== inputString[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(checkPalindrome('oiopoca'))


const palindromes = function (str) {
    let cleanedUp = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseString = cleanedUp.split("").reverse().join("");
    if (cleanedUp === reverseString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

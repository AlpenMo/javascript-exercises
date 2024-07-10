const reverseString = function(string) {
    if (string === '') {
        return '';
    }
    let charArray = string.split('');
    let arrayLength = charArray.length;
    let newArray = [];
    for (let i = 0; i < arrayLength; i++) {
        newArray.unshift(charArray[i]);
    }
    let newString = newArray.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

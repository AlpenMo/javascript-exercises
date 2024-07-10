const repeatString = function(string, num) {

    let newString = '';
    let newNumber = Number(num);
    if (string === '' || newNumber === 0 ) {
        return '';
    }
    if (newNumber < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < newNumber; i++) {
        newString += string;
    }
    return newString;
}
// Do not edit below this line
module.exports = repeatString;

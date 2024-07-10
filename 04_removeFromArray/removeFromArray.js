const removeFromArray = function(array, ...args) {
    let removedArray = array.filter(element => !args.includes(element));
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;

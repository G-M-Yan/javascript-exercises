const removeFromArray = function(array, ...argsToRemove) {
    const myArray = [];
    array.forEach(item => {
        if (!argsToRemove.includes(item)) {
            myArray.push(item);
        }
    });
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;

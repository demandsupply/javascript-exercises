const fibonacci = function(index) {
    let fibonacciArray = [0, 1];
    if (index < 0) {
        return "OOPS";
    }
    index = Number(index);
    if (Number.isInteger(index) === false) {
        return false;
    }
    for (i = 2; i <= index; i++) {
        // fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
        fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
    }
    return fibonacciArray[index];
};

// Do not edit below this line
module.exports = fibonacci;

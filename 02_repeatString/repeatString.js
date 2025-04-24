const repeatString = function(string, number) {
    if (number < 0) {
        return "ERROR";
    } 
    let newString = "";
    let n = parseInt(number);
    while (n > 0) {
        newString += string;
        n--;
    }
    return newString; 
};

// Do not edit below this line
module.exports = repeatString;

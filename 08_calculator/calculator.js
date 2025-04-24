const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  array.forEach((item) => {
    sum += item;
  })
  return sum;
};

const multiply = function(array) {
  let mult = 1;
  array.forEach((item) => {
    mult *= item;
  });
  return mult;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let result = 1;
  while (a > 0) {
    result *= a;
    a--; 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

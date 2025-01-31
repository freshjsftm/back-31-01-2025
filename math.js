function add(num1 = 1, num2 = 1) {
  return num1 + num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
console.log('math');

module.exports = { add, mult, sub };

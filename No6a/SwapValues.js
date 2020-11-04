//A program to swap 2 values without having a new additional variable
var a = 3
var b = 5

console.log(`a: ${a}, b: ${b}`)

b = b - a
a = a + b
b = a - b

console.log(`a: ${a}, b: ${b}`)
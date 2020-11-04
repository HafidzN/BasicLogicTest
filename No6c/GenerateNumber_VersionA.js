//assumption 1: the question is specifically asked for an array which contains values in range 1-100 and doesnt contain any negative values

numbers = [-1, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 34, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99, 100];

const countNumber = arr => {
const newArr = arr.filter(val => (val > 0  &&  val <= 100))
let numbersCount = new Array(101).fill(0)
newArr.map(i=>{ numbersCount[i]++ })
return numbersCount
}

const generateNumber = arr => {
let nums = []
arr.forEach((val,i) => val>1 && nums.push(i))
return nums
}

console.log(generateNumber(countNumber(numbers)))
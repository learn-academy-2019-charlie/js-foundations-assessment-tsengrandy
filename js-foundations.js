// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
const anonymousFunction = (num) => {
    if (typeof num !== 'number'){
        throw 'Please enter a number'
    }
    if (num % 3 === 0){
        return(`${num} is divisible by three`)
    } else {
        return(`${num} is not divisible by three`)
    }
}
console.log(anonymousFunction(9))
console.log(anonymousFunction(5))

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
var helloMe = {first_name: 'Randy', last_name: 'Tseng', college: 'UCSD', age: 24}
const description = (person) => {
    return (`Name: ${person.first_name} ${person.last_name}\nAge: ${person.age}\nCollege: ${person.college}`)
}
console.log(description(helloMe))

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
var groceryList = ['milk', 'bread', 'cereal', 'bacon', 'apple']
const firstMiddleLast = (array) => {
    return(`${array[0]} ${array[(array.length -1) / 2]} ${array[array.length - 1]}`)
}
console.log(firstMiddleLast(groceryList))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
const alphabetSoup = (str) => {
    return str.split("").sort().join("")
}
console.log(alphabetSoup('learn'))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
// output should be: "9 ducks", etc
const animalNums = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++){
        console.log(`${arr1[i]} ${arr2[i]}`)
    }
}
animalNums(nums, nouns)

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var fiveNum = [1,0,5,17,3]
const mult5 = (arr) => {
    return arr.map(value => value * 5)
}
console.log(mult5(fiveNum))
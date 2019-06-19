# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
Primitives: number, string, boolean, symbol, null, undefined
Nonprimitives: array, object, class

2. What's the difference between =, ==, and === in JavaScript?
= is to assign something on the left to the value on the right
== is to compare two values if they're of equal values, regardless of types
=== is to compare two values if they're of equal values and types

3. What is the difference between an array's index and length?
array index are the individual "cells" in the array, starts at index 0
array length is a number value that counts the number of cells in the array

4. What are the three parts of a for loop?
let i = 0   declaration of where to start, this starts at 0
i < 10      when to stop the loop, this stops when i is no longer < 10
i++         what to do at the end of each loop, this increments it by 1 each loop

5. What is a function's declaration, argument, and call?
function declaration is when you create the function and name it
function arguments are things you pass into the function as inputs to use
function call is when a function is used in the program and is run

6. What are the three main steps in saving work to github?
git add
git commit -m "comment here of what this commit was about"
git push

7. What is the terminal command to move directories?
cd moves to the top directory
cd .. moves you up one level
cd "filename.js" moves to the specific file 

8. Do you have a suggestion for a Check In question?
This was the hardest question on this test...
What's 1 life changing event in your life?

9. What was your favorite topic this week?
Learning React was cool, knowing that it's a popular new technology

10. What was your "A-ha!" moment this week?
Understanding how class and inheritance works. This was something I learned back in college when I took a Java class and gave up b/c it was too hard

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
undefined 
JS hoists var text = 'inside' to the top of the block but does not assign the value to it yet, so it's initialized as undefined and logged as undefined first before we assign the value 'inside' to it.


2. What is JSON? How does it relate to javascript objects?
JSON is javascript object notation. It is a text format that makes it easy to transfer data such as JS objects.

3. Describe a closure, what is it good for and how do you recognize one?
A closure is a function that has access to an outer function's variables.
It's good for hiding variable you don't want the user to be able to see.
You recognize it whenever there is a function within another function.
// Assignment - 48 
/* ________________________ Question no 1 _______________________
Positive Index
Create an array of 7 colors.

Ask the user to enter a number (0–6).

Use .at() to get the color at that index and display it in the console.

Example Output:
Enter index: 2
Color at index 2 is: Green
___________________________ Answer ______________________________ */
// let array = ['green','blue','white','red','pink','yellow'];
// let enterNumber = prompt('Enter a number');
// console.log(array.at(enterNumber));
/* ________________________ Question no 2 _______________________
 Negative Index
Create an array of 6 fruits.

Ask the user to enter a negative index (like -1 for last element).

Show the fruit at that position using .at().

Example Output:

Enter negative index: -1
Fruit at -1 is: Mango
___________________________ Answer ______________________________ */
// let fruits = ['apple','mango','grapes','banana','guava'];
// let ind = -2;
// console.log(fruits.at(ind))
/* ________________________ Question no 3 _______________________
 Accessing Last 3 Elements
Create an array of 10 numbers.

Print the last three elements using .at() with negative indexes.

Example Output:

Last 3 elements: 50, 60, 70
___________________________ Answer ______________________________ */
// let num = [10,20,30,40,40,50,60,70,80,90];
// let last = num.at(-1);
// let secondLast = num.at(-2);
// let thirdLast = num.at(-3);
// let arr = [thirdLast,secondLast,last];
// console.log(arr)
/* ________________________ Question no 4 _______________________
Simple Word Check
Ask the user to enter a word.

Check if the word starts with the letter "A" using startsWith().

Show a message in the console.

Example Output:

Enter word: Apple
Yes! It starts with A.
___________________________ Answer ______________________________ */
// let word = prompt('enter a word');
// let check = word.startsWith('A');
// if(word.startsWith('A')){console.log(`${word} : yes! starts with A`)}
// else{console.log(`${word} : does not start with A`)}
/* ________________________ Question no 5 _______________________
Filter Array Using startsWith()
Create an array of 8 country names.

Filter and display only those countries starting with the letter "P".

Example Output:

["Pakistan", "Poland", "Philippines"]
___________________________ Answer ______________________________ */
// let array = ['indea','newzeland','japan',"Pakistan", "Poland", "Philippines",'Bangladesh'];
// let need = array.filter(function(element){return element.startsWith('P')})
// console.log(need)
/* ________________________ Question no 6 _______________________
className
___________________________ Answer ______________________________ */
// function styling(){let get = document.getElementById('heading');
//     get.className += ' head';
// }
/* ________________________ Question no 7 _______________________
Create a <p> element in HTML with id="text" and class="highlight".

Using JavaScript, check if the element has a class attribute and print a message in the console.

Example Output:

Yes! This element has a class attribute.
___________________________ Answer ______________________________ */
// let get = document.getElementById('text');
// let check = get.hasAttribute('class');
// console.log(check);
// if(check){console.log('ok has attribute')}
// else{console.log('not has attribute')}
/* ________________________ Question no 8 _______________________
 Practice Task for getAttribute()
Task:

Create an <a> tag with id="link" and href="https://www.google.com".

Using getAttribute(), get the href value and show it in the console.

Example Output:

csharp
Copy
Edit
Link URL is: https://www.google.com
4. Combined Practice Task
Task:

Create an <img> tag with id="pic" and src="image.jpg".

Check if it has alt attribute using hasAttribute().

If not, add it using setAttribute('alt', 'Sample Image').

Finally, log the alt value using getAttribute().

If you want, I can create a ready-to-run HTML + JS practice file for these tasks in one page.
Do you want me to create it?

___________________________ Answer ______________________________ */
// let get = document.getElementById('pic');
// let check = get.hasAttribute('alt');
// console.log(check)
// get.setAttribute('alt', 'sample Img');
// let value = get.getAttribute('alt');
// console.log(value);
/* ________________________ Question no 9 _______________________
querySelector
___________________________ Answer ______________________________ */
// let get = document.querySelector('p');
// console.log(get);
// let get2 = document.querySelectorAll('p');
// console.log(get2);
// get2.forEach(function(element){element.style.color = 'blue'})
/* ________________________ Question no 10 _______________________
createelement, createtextnode etc
___________________________ Answer ______________________________ */
// let heading = document.createElement('h2');
// let headingText = document.createTextNode('I am Learning');
// heading.appendChild(headingText);
// document.body.appendChild(heading);
/* ________________________ Question no 11 _______________________
.focus() and input.value = ''
___________________________ Answer ______________________________ */
// function check(){let get  = document.getElementById('userinput').value;
//                 document.getElementById('userinput').value = '';
//                 document.getElementById('userinput').focus();
// console.log(get)}
/* ________________________ Question no 12 _______________________
.repeat()
___________________________ Answer ______________________________ */
// console.log('8'.repeat(9))
/* ________________________ Question no 13 _______________________
.repeat()
___________________________ Answer ______________________________ */
// function repeating(){let getWord = document.getElementById('word').value; 

//    let repeatNumber = document.getElementById('number').value; 

//    let requirement = (getWord + ' ').repeat(repeatNumber);

//    document.getElementById('pp').innerHTML = requirement;}

/* ________________________ Question no 14 _______________________
repeat method
___________________________ Answer ______________________________ */
// function repeating(){let getWord = document.getElementById('word').value;
//     let number = document.getElementById('number').value;
//           number = Number(number)
//     let need = (getWord + ' ').repeat(number);
//     let getDisplay = document.getElementById('display');
//     getDisplay.innerHTML = need;
// }
/* ________________________ Question no 15 _______________________
mask account no
___________________________ Answer ______________________________ */
//  let ac = '38301-35677888-349';
//  console.log(ac);
//  let onePart = ac.slice(0,6);
//  console.log(onePart);
//  let centerPart = ac.slice(6,14);
//  console.log(centerPart);
//  let last = ac.slice(14);
//  console.log(last);
//  let need = '*'.repeat(7);
//  console.log(need);
//  let requirement = onePart + need + last;
//  console.log(requirement)
/* ________________________ Question no 16 _______________________
object
___________________________ Answer ______________________________ */
// const student = {name  : 'Aziz',
//     age : 23,
//     course : 'web',
//     city :'karachi'
// }
// console.log(student);
// let check = student.hasOwnProperty('name');
// console.log(check);
// student.age = 45;
// console.log(student);
// delete student.course;
// console.log(student);
// student.district = 'Kohat';
// console.log(student)
/* ________________________ Question no 17 _______________________
anonymous function
___________________________ Answer ______________________________ */
// let greet = function(name){console.log(`Hello ${name}`)}
// greet('Aziz');
/* ________________________ Question no 18 _______________________
localStorage
___________________________ Answer ______________________________ */
const student = {name : 'Aziz',
    age : 30,
    course : 'web',
    campus : 'main'
}
console.log(student,typeof student);
let converString = JSON.stringify(student);
console.log(converString,typeof converString);
localStorage.setItem('task',converString);

let get = localStorage.getItem('task');
   get = JSON.parse(get);
console.log(get)
/* ________________________ Question no 19 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 20 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 21 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 22 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 23 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 24 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 25 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 26 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 27 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 28 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 29 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 30 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 31 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 32 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 33 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 34 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 35 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 36 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 37 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 38 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 39 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 40 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 41 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 42 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 43 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 44 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 45 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 46 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 47 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 48 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 49 _______________________

___________________________ Answer ______________________________ */

/* ________________________ Question no 50 _______________________

___________________________ Answer ______________________________ */

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
// const student = {name : 'Aziz',
//     age : 30,
//     course : 'web',
//     campus : 'main'
// }
// console.log(student,typeof student);
// let converString = JSON.stringify(student);
// console.log(converString,typeof converString);
// localStorage.setItem('task',converString);

// let get = localStorage.getItem('task');
//    get = JSON.parse(get);
// console.log(get)
/* ________________________ Question no 19 _______________________
Save and Retrieve a Name
Create a simple HTML page with:

One input field to enter your name

A button to save the name to Local Storage

A button to show the saved name on the page
___________________________ Answer ______________________________ */
// function saving(){let getName = document.getElementById('userinput').value;
//     console.log(getName,typeof getName);
//     getName = JSON.stringify(getName);
//     localStorage.setItem('task',getName);
//     let getFrom = localStorage.getItem('task');
//     getFrom = JSON.parse(getFrom);
//     document.getElementById('display').innerHTML = getFrom
    
// }
/* ________________________ Question no 20 _______________________
local storage counter
___________________________ Answer ______________________________ */
// first we see our local storage if data is available or not
// let get = localStorage.getItem('data');
// if(get){get = Number(get)}
// else{get = 0}
// // data show on dom if available
// let show = document.getElementById('display');
//    show.value = get;
// //    create update data function and store data in local storage by this function 
// function update(){show.value = get;
//     localStorage.setItem('data',get)
// }
// // increment 
// function incrementing(){get++;
//     update();
// }
// // decremetn 
// function decrementing(){if(get>0){get --;}
// else{get  = 0}
// update();}
// // reset 
// function reseting(){get = 0;
//     update();
// }
/* ________________________ Question no 21 _______________________
reverse string 
___________________________ Answer ______________________________ */
// let str = 'java';
// let reversed = '';
// for(let i = str.length -1;i>=0; i--){reversed = reversed + str[i]}
// console.log(reversed)
// let array = ['a','b','c'];
// let rev = array.reverse();
// console.log(rev);
// let num = [1,2,3,4];
// let rv = num.reverse();
// console.log(rv)
/* ________________________ Question no 22 _______________________
leap year
___________________________ Answer ______________________________ */
// let year = 2000;
// if((year % 4 === '0' && year % 100 !== '0')||(year % 400 === 0)){console.log('leap year')}
// else{console.log('not leap year')}
/* ________________________ Question no 23 _______________________
merge obj by spread operator
___________________________ Answer ______________________________ */
// const student = {name : 'Aziz',
//     age : 30
// }
// const detail = {campus : 'main',
//     city : 'karachi'
// }
// const record = {...student,...detail};
// console.log(record)

/* ________________________ Question no 24 _______________________
obj length
___________________________ Answer ______________________________ */
// const student = {name : 'Aziz',
//     course : 'web',
//     city : 'karachi'
// }
// let len = Object.keys(student).length;
// console.log(len)
/* ________________________ Question no 25 _______________________
 get the data of obj by for loop
___________________________ Answer ______________________________ */
// const student = {name : 'Aziz',
//     course : 'web',
//     city : 'karachi'
// }
// for(let key in student){console.log(`${key} : ${student[key]}`)}
/* ________________________ Question no 26 _______________________
itrators for of/in
___________________________ Answer ______________________________ */
// let fruit = ['apple','mango','banan'];
// for(let key of fruit){console.log(key)};
// let vegetables = ['carrot','onion','potato'];
// for(let key in vegetables){console.log(key)}
/* ________________________ Question no 27 _______________________
array destructuring
___________________________ Answer ______________________________ */
// let [name, age, course] = ['Aziz',20,'web development'];
// console.log(name);
// console.log(course);
/* ________________________ Question no 28 _______________________
obj destructuring
___________________________ Answer ______________________________ */
// const student = {name : 'Aziz',
//     age : 23,
//     course : 'web'
// }
// console.log(student.age);
// const {name,age,course} = student;
// console.log(name);
// console.log(course)

/* ________________________ Question no 29 _______________________
enhanced object literals 
___________________________ Answer ______________________________ */
// let name = 'Aziz';
// let age = 30;
// let course  = 'web'
// const details = {name ,
//     age ,
//     course
// }
// console.log(details)
/* ________________________ Question no 30 _______________________
largest number 
___________________________ Answer ______________________________ */
// let array =  [12, 5, 20,88, 8, 17];
// // let lar = Math.max(...array);
// // console.log(lar)
// // by for loop
// let large = 0;
// for(let key of array){if(key > large){large = key}
// }
// console.log(large)
/* ________________________ Question no 31 _______________________

find smallest number of array
___________________________ Answer ______________________________ */
// let array = [3,2,454,8,-1];
// // let smallest = Math.min(...array);
// // console.log(smallest)
// let smallest = 0;
// for(let key of array){if(key < smallest){smallest = key;}}
// console.log(smallest)
/* ________________________ Question no 32 _______________________
check palindrom
___________________________ Answer ______________________________ */
// let word = 'mahamt';
// let check = '';
// for(let i = word.length-1; i>=0;i--){check = check + word[i]};
// console.log(check);
// if(word === check){console.log(`${word} is palindrome`)}
// else{console.log(`${word} is not palindrome`)}
/* ________________________ Question no 33 _______________________
 remove duplicate from an array 
 [1, 2, 2, 3, 4, 4, 5]
___________________________ Answer ______________________________ */
// let array = [1, 2, 27, 3, 4, 4, 27];
// let uniqueArray = array.filter((element,index)=>{return array.indexOf(element) === index})
// console.log(uniqueArray)
/* ________________________ Question no 34 _______________________

___________________________ Answer ______________________________ */
// let array = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = [];
// let k = 0; // index for uniqueArray
// for (let i = 0; i < array.length; i++) {
//     let isDuplicate = false;
//     // manually check in uniqueArray
//     for (let j = 0; j < k; j++) {
//         if (array[i] === uniqueArray[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         uniqueArray[k] = array[i]; // manually push
//         k++;
//     }
// }
// console.log(uniqueArray);
// Output: [1, 2, 3, 4, 5]
/* ________________________ Question no 35 _______________________
remove duplicate by for loop
___________________________ Answer ______________________________ */
// let array = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = [];
// let check = {};
// for(let i = 0; i <array.length; i++){if(!check[array[i]]){check[array[i]] = true;
//     uniqueArray.push(array[i])
// }}
// console.log(uniqueArray)
/* ________________________ Question no 36 _______________________
filter()
___________________________ Answer ______________________________ */
// let frutis = ['mango','grapes','guava','orange','mango','bnanaa','mango'];
// let need = frutis.filter((elements,indexs)=>{return elements === 'mango'})
// console.log(need)
/* ________________________ Question no 37 _______________________
find()
___________________________ Answer ______________________________ */
// let frutis = ['mango','grapes','guava','orange','mango','bnanaa','mango'];
// let need = frutis.find((elements,indexs)=>{return elements === 'mango'})
// console.log(need)
/* ________________________ Question no 38 _______________________
forEach()
___________________________ Answer ______________________________ */
// let frutis = ['mango','grapes','guava','orange','mango','bnanaa','mango'];
// frutis.forEach((Elements)=>{console.log(Elements
// )})
/* ________________________ Question no 39 _______________________
.starWith();

___________________________ Answer ______________________________ */
// let frutis = ['mango','grapes','guava','orange','mango','bnanaa','mango'];
// let need = frutis.find((elements)=>{return elements.startsWith('g');})
// console.log(need)
/* ________________________ Question no 40 _______________________
includes()
___________________________ Answer ______________________________ */
// let frutis = ['mango','grapes','guava','orange','mango','bnanaa','mango'];
// // let check = frutis.includes('grapes');
// let check = frutis.indexOf('mangoj')
// console.log(check)
/* ________________________ Question no 41 _______________________
 .at()
___________________________ Answer ______________________________ */
// let frutis = ['mango','grapes','guava','orange','mango','bnanaa','mango'];
// //   let check = frutis.at(5);
// // let check = frutis[5];

//   console.log(check)
/* ________________________ Question no 42 _______________________
filter()
___________________________ Answer ______________________________ */
// const user = [
//     {id : 1,
//         name :'Aziz',
//         designation : 'Doctor'
//     },
//     {id : 3,
//         name :'Wqas',
//         designation : 'Captain'
//     },
//     {id : 3,
//         name :'Zulfiqar',
//         designation : 'Professor'
//     },
//     {id : 4,
//         name :'Muzamil',
//         designation : 'ASP'
//     }
//     ,{id : 5,
//         name :'Umair',
//         designation : 'Professor'
//     }
// ]
// let need = user.find(function(element){return element.designation === 'Professor'});
// console.log(need)
/* ________________________ Question no 43 _______________________
closurFunction()
___________________________ Answer ______________________________ */
// const  closureHandlet = ()=>{let outerValu = 'i am outer value';
//      return ()=>{return outerValu}}


// let result =  closureHandlet();
// console.log(result());

// const closurFunction = function(){let greet = 'Hello';
//     return function (){return greet;}
// }
// let resultt = closurFunction();
// console.log(resultt())
/* ________________________ Question no 44 _______________________
closure Function
___________________________ Answer ______________________________ */
//  function calculation (){ let a = 4; 
//     let b = 8;
//     return function(){return restult = a + b;}
//  }
//  let need = calculation();
//  console.log(need())
/* ________________________ Question no 45 _______________________
 recursion function
___________________________ Answer ______________________________ */
//  const learningRecursion = (num) =>{console.log('num ',num);
//      if(num != 1){learningRecursion(num-1)}
//      else{console.log('Loop ended')}
// }
// learningRecursion(5)
// const recursion = (num)=>{console.log('num',num);
//     if(num != 1){recursion(num-1)}
//     else{console.log('loop end')}
// }
// recursion(3)
/* ________________________ Question no 46 _______________________
recursion()
___________________________ Answer ______________________________ */
// function countDown(number){if(number <=0){
//     // base case when to stop:
//     console.log('done');
//     return;
// }
// // print the number
// console.log(number);
// // call recursive function
// countDown(number - 1)}
// // call out of scope funtion to pass parameter
// countDown(5 )
/* ________________________ Question no 47 _______________________
closure function
___________________________ Answer ______________________________ */
// let greet = function(name){
//   return  function(){console.log(`hello ${name}`)}
// }
// let result = greet('Aziz');
// result();
/* ________________________ Question no 48 _______________________
findIndex()
___________________________ Answer ______________________________ */
// const user = [
//     {id : 1,
//         name : 'Aziz'
//     },
//      {id : 2,
//         name : 'Pervaiz'
//     },
//      {id : 3,
//         name : 'Umair'
//     },
//      {id : 4,
//         name : 'Mohsin'
//     }
// ];
// let targetIndex = user.findIndex(function(element){return element.id === 2});
// user.splice(targetIndex,1);
// console.log(user)
/* ________________________ Question no 49 _______________________
some( )
___________________________ Answer ______________________________ */
// const user = [
//     {id : 1,
//         name : 'Aziz'
//     },
//      {id : 2,
//         name : 'Pervaiz'
//     },
//      {id : 3,
//         name : 'Umair'
//     },
//      {id : 4,
//         name : 'Mohsin'
//     }
// ];
// let target = user.some((Element)=>{return Element.name === 'Mohsiyn'});
// console.log(target);
/* ________________________ Question no 50 _______________________
Advance javascript use of map( ) method:
___________________________ Answer ______________________________ */
const user = [
    {id : 1,
        name : 'Aziz'
    },
     {id : 2,
        name : 'Pervaiz'
    },
     {id : 3,
        name : 'Umair'
    },
     {id : 4,
        name : 'Mohsin'
    }
];

let need = user.map((item)=>{return item.name + ' khan'});
console.log(need)
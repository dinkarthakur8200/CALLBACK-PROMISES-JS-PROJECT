//1.= Write a JavaScript function that takes two arguments:
//An array of integers & callback function. and returns new array where each element is doubled using the callback..
function doubleArrayElements(arr, callback){
    const doubledArray = [];
    for(let i = 0; i < arr.length; i++ ) {
      doubledArray.push(callback(arr[i]));  
    }
    return doubledArray ;
}
const numbers =[1,2,3,4,5,6,7,8,9];

function double(num){
    return num*2 ;
}

const doubledNumbers = doubleArrayElements(numbers, double);
console.log(doubledNumbers);
// 2.= Question manipulate string ...

function manipulateString(inputstring){
  const manipultedString = inputstring.toUpperCase();

  function logstring(){
    console.log(`The manipulated string is : ${manipultedString}`);
  }
  return logstring;
}

const mycallback = manipulateString("Hello World!!");
mycallback();
// 3.=
const person ={
  firstname : "DINKAR",
  lastname : "THAKUR",
  age:20
}
function ageIndays (personobject, callback){
  const fullname = `${personobject.firstname} ${personobject.lastname}`;
  const ageIndays = personobject.age*365
  callback(fullname, ageIndays);
}
function logresult(fullname,ageIndays){
  console.log(`The person fullname is : ${fullname} and their age in days is :${ageIndays}.`)
}
ageIndays(person,logresult);

// 4.=
// Arrange in alphabetical order ....
// Original array
// const number = [4, 9, 16, 25];

// // Using map() to get the square root of each number
// const sqrtArray = number.map(Math.sqrt);

// console.log(sqrtArray); // [2, 3, 4, 5]

const books = [
    { title: 'JAVASCRIPT by DINKAR THAKUR', 
      author: 'DINKAR THAKUR', 
      year: 1925 },
    { title: 'To Kill a Mockingbird', 
      author: 'Harper Lee',
      year: 1960 },
    { title: '1984',
      author: 'George Orwell', 
      year: 1949 },
    // Add more book objects here...
  ];
  
  // Callback function to log titles in alphabetical order
  function logTitlesInAlphabeticalOrder(titles) {
    const sortedTitles = titles.sort();  // Sort titles alphabetically
    console.log('Book Titles In (Alphabetical Order by Dinkar Thakur):');
    sortedTitles.forEach((title) => {
        console.log(title);
        });
  } 
  
  // Extract titles using map
  const bookTitles = books.map((book) => book.title);
  
  // Call the callback function with the list of titles
  logTitlesInAlphabeticalOrder(bookTitles);

//   5.=Greeting Promise...
 function greetingpromise(name){
    return new Promise((resolve,reject) =>{
        if (typeof name === 'string' && name.length>0){
            resolve(`Hello , ${name} !`);
        }
        else{
            reject('Invalid name provide! May integer or something')
        }
    })
 }

// Example usage::
greetingpromise('Mithun')
.then((greeting)=>{
    console.log(greeting);
})
.catch((error)=>{
     console.error(error);
})

// 6.-=>
// Fetch Data Asynchronously.....
// API data fetch ......

async function fetchdata(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  const title = data.title;
  console.log("Title:", title);

  console.log(data);
}
fetchdata();
//   7.=MUltiple requests.....
async function multipleapidatafetch(){
  try{
      const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data1 = await response1.json();

      const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data2 = await response2.json();
      // combining the data ......
      console.log(data1,data2);
      }
  catch(error){
      console.error('Error fetching the Data:', error);
  }
}
// callback the function....
multipleapidatafetch();
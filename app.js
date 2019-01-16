// //Global Scope- window object 
// //document- property of the window objet


// //Basic 
// //select the element 
// //Read or change events
// //respond to user events
// //Event handling


// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');


// myButton.addEventListener('click', () => {
//   myHeading.style.color = myTextInput.value;
// });



// const myList = document.getElementsByTagName('li')
// for(let i = 0; i <myList.length; i +=1) {
//   myList[i].style.color = 'purple';
// }


// const myList = document.getElementsByClassName('error-not-purple');

// for(let i = 0; i<errorNotPurple.length; i += 1) {
//   errorNotPurple[i].style.color = 'red';
// }


// document.querySelectorAll('li')
// //this will return all the items from the list.
// document.querySelector('li') 
// //this will only return the first element from the list 

// document.querySelector('#myHeading')
// document.querySelectorAll('.error-not-purple')

// document.querySelector('[]')

const myList = document.getElementsByTagName('li');
for(let i =0; i< myList.length; i += 1){
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.querySelectorAll('.error-not-purple');

for(let i=0; i< errorNotPurple.length; i+=1){
  errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li: nth-child(odd)');

for(let i= 0; i< evens.length; i += 1){
  evens[i].style.backgroundColor = 'blue';
}

//Mozilla developement Network
//getElementsByClassName- method of document object

//canIUse.com - anyCSS feature
//find browsers that support this feature/ const keywork.

//find a detailed history of how it is.

//How to read and change text.
//text content and inner html


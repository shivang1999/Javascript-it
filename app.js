//Global Scope- window object 
//document- property of the window objet


//Basic 
//select the element 
//Read or change events
//respond to user events
//Event handling


const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');


myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});



const myList = document.getElementsByTagName('li')
for(let i = 0; i <myList.length; i +=1) {
  myList[i].style.color = 'purple';
}


const myList = document.getElementsByClassName('error-not-purple');

for(let i = 0; i<errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

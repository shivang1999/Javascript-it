//Global Scope- window object 
//document- property of the window objet


//Basic 
//select the element 
//Read or change events
//respond to user events
//Event handling


const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('MyTextInput');


myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

//key pressers, scrolling and mouse moves.



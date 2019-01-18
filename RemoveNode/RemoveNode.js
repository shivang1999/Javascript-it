const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptioninput = document.querySelector('input');
const descriptionp = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li')[0];



listItems.addEventListener('mouseover', ()=> {
  listItems.textContent = listItems.textContent.toUpperCase();
});

listItems.addEventListener('mouseout', ()=> {
  listItems.textContent = listItems.textContent.toLowerCase();
});


toggleList.addEventListener('click', () => {
  if(listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else{
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }

  // listDiv.style.display = 'none';
});
 
descriptionbutton.addEventListener('click', () => {
  descriptionp.innerHTML = descriptioninput.value + ':';
  descriptioninput.value = '';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value ;
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];

  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
  

});




// //Function as an argument in a function

// say('Hello');

// function exec(func, arg) {
//   func(arg) ;
// }

// exec(function say(something) {
//   console.log(something);
// }, 'Hi,there');

// exec((something)) => {
//   console.log(something);
// }, 'Greetings, everyone');

// //add event listener has three forms-

// //Event Target.addEventListener() 
// //event target can be an element, or a window object.




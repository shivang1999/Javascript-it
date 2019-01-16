// //return the text content on the node
// let myHeading = document.querySelector('h1')

// myHeading.textContent

//If we assign a string to text content, we can also change to the heading text.

myHeading.textContent = "This is a new heading"

//namely the paragraph, text input and button.

const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

button.addEventListener('click', () => {
  p.textContent = input.value + ':';
});

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});



// Difference between innerHTML tag and textContent tag. The main difference between the two is that innerHTML can be used to alter all the li tags together.


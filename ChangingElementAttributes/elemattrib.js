
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

toggleList.addEventListener('click', () => {
  if(listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else{
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }

  // listDiv.style.display = 'none';
})
 
button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

p.style.color = 'darkblue'
p.style.backgroundColor = 'lightblue'

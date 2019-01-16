const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const descriptioninput = document.querySelector('input');
const descriptionp = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('input.addItemButton');


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

//AddItem button is the listener which is helping it create all the tags button.

//Task to do-

//Create a contact us page using this


//naming variables well


//Node.appendChild method is used to append it.

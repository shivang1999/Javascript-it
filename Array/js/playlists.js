var playList = [];
playList.push('I Did It My Way');
playList.push('I Want It That Way');
playList.push('Wrecking Ball', 'Lightening');
playList.unshift('Born To Run');
playList.unshift('')



printList(playList);

//arrays are one of the most used 
//to create a list of last twenty tweets
//musical playlist 
//for an array of quiz question
//for loop- to iterate through items in an aray

var students = ['Sacsha', 'Lynn','Jennifer','Paul'];
for(var i = 0; i<students.length ; i+= 1) {
  console.log(students[i]);

}

var daysInWeek = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var daysString = daysInWeek.join(',');
console.log(daysString);

var currentStudents = ['Joan','John ']

var fruit = ['Apple','Orange','GrapeFruit'];
var position = fruit.indexOf('Apple');



var inStock = [ 'apples', 'eggs','milk','cookies','cheese','bread','lettuce','carrot','brocolli','pizza','potato','crackers','onion','tofu','frozen dinner','cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while(true) {
  search = prompt("Search for a product in our store. Type 'list' to show all the products and 'quit' to exit ");
  search = search.toLowerCase();
  if(search === 'quit') {
    break;
  } else if(search === 'list'){
      print( inStock.join(','));
    }else {
          if (inStock.indexOf(search  )) {
          print('Yes, we have '+ search + 'in the store');
        } else{
          print(search + 'is not in stock');
        }
    }
  }
}

//This technique lets to catch errors.


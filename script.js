var personList = [];

// Click event

var submit = document.querySelector('#submit');
submit.addEventListener('click', function() {
  var name = document.querySelector('#name');
  var age = document.querySelector('#age');
  var person = {name:name.value, age:age.value}
  
  if (name.value !== '' && age.value !== '') {
  personList.unshift(person);
  
  average();
  renderList();
  clearVal();
  } else {
  alert("Please, complete all the fields.");
  }
});

// Names and Ages

function renderList() {
  var nameList = document.querySelector('.names');
  nameList.innerHTML = '';
  var ageList = document.querySelector('.ages');
  ageList.innerHTML = '';
  
  personList.forEach(function(person){
    
    var liName = document.createElement('li');
    
    liName.innerText = `${person.name}`;
    
    nameList.appendChild(liName);
    
    var liAge = document.createElement('li');
    
    liAge.innerText = `${person.age}`;
    
    ageList.appendChild(liAge);
  });
}

// Clear the input fields

function clearVal() {
  var nameEl = document.querySelector('#name');
  var ageEl = document.querySelector('#age');
  nameEl.value = '';
  ageEl.value = '';
}

// Find the average age

function average() {
  var ageTotal = 0;
  var averageEl = document.querySelector('.average');
  
  personList.forEach(function(person) {
    ageTotal = (ageTotal + parseInt(person.age));
  });
  
  averageEl.innerHTML = Math.round(ageTotal / personList.length);
}
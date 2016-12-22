// Code for "Functions inside of functions"

function logTenNumbers() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

console.log(logTenNumbers());

// What if we create a function which will take another function as an argument and runs it every time it gets called

function runWithDebugger(myfunction) {
  debugger;
  myfunction();
}

runWithDebugger(logTenNumbers());

// Another example of function which enhances the behaviour of another function - built in setTimeout() function which acts as a simple alarm clock:

setTimeout(function() {
  console.log("Hey you!")
}, 5000);

// More examples - forEach(), which is defined for arrays:

var students = ['anna', 'pete', 'john'];

// we can log students' names like so but it's too repetitive:

function logName(name){
	console.log(name);
}

console.log(logName(students[0]));

console.log(logName(students[1]));

// one way to improve that is with a for loop:

for (var i=0; i < students.length; i++) {
	logName(students[i]);
}

// but even better enhancement is forEach method:

students.forEach(logName);

// Let's try to recreate forEach()

function forEach(myArray, myFunction) {
  for (var i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}

forEach(students, logName);

// We can see the same pattern in addEventListener()

tutorialElement.addEventListener('click', function() {
  console.log('Tutorial element was clicked');
});

// The function will run every time tutorialElement is clicked

// If we choose to pass in an event object, it will be logged in every time the element is clicked

tutorialElement.addEventListener('click', function(event) {
  console.log('Tutorial element was clicked');
  console.log(event);
});

// All the functions above which accept another function as a paramter and enhances its behaviour is called higher order functions. The functions which are getting passed in in higher order functions are called callback functions

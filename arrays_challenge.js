

//
// Create a function that finds the highest number.
//
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.


var a = [5, 3, 7, 9, 2];


// purpose: create function that returns highest number in array
// signature: input an array of numbers
// examples:
              // highestNumber([1,4,2]) -> 4
              // highestNumber([-1,-2,-4]) -> -1
              // highestNumber([11, 2, 5]) -> 11

function highestNumber(array) {

  var max = -1000;

  array.forEach( function (element) {
    //console.log(element); // testing functionality of forEach function
    //console.log(max);
    if (element > max) {
      max = element;
    }
  })
  return max;
}


// problem 2
function lowestNumber(array) {

  var min = 1000;


  array.forEach( function (element) {
    //console.log(element); // testing functionality of forEach function
    //console.log(min);
    if (element < min) {
      min = element;
    }
  })
  return min;
}



// problem 3
function smallestNumber(array) {

  //var min = 0
  var closest = array[0];


  //var distances = [];

  array.forEach( function (element) {
    //console.log(min);
    //distances[element] = 0 - element;

    if ((zero - element) < closest) {  //abs
      closest = element;
    }

  })
  return closest;
}






function smallestNumber(array, num) {

  var closest = array[0];
  // var num = 0;

  array.forEach( function (element) {

    if (Math.abs(num - element) < Math.abs(num - closest)) {  //abs
      closest = element;
    }
  })
  return closest;
}





// Create a function that calculate the sum.
//
// sum([1,2,3]) should return 6
// sum([]) should return 0

function sum(array) {

  var total = 0

  array.forEach( function (element) {

      total = total + element

  })
return total
}





function mean(array) {

  var total = 0

  array.forEach( function (element) {

      total = total + element



  })

return total / array.length

}



function indexHigh(array) {

  var high = -1000;

  array.forEach( function (element, index ) {
    //console.log(element); // testing functionality of forEach function
    //console.log(index + " " + element);

    if (element > high) {
      high = element;
    }
  })

  return array.lastIndexOf(high);  // , array[index]
}



// arrays of strings
var siblings = ["gabe", "jake", "nathan", "angelee"]
var parents = ["gregg", "marcella"]


var siblingsOrdered = siblings.sort();

var parentsReverseSort = parents.sort().reverse();


var family = (siblings + "," + parents);

family.split(",").sort()



function familyMember (name, family) {

  return family.lastIndexOf(name);

}


























// Create a function that returns an array with only the even elements from the array.
//
// evenElements([1,2,3,4]) should return [2,4]
// Hint: use the % operator
// What happens if there are no even numbers?



function even(array){

  var evnum = []

  array.forEach (function(number) {

    if (number % 2 == 0) {/* 1 is odd */

      //console.log(number + " is even ")

      evnum.push(number);
  }
})
  return evnum
}



function odd(array){

  var oddnum = []

  array.forEach (function(number) {

    if (number % 2 == 1 || number % 2 == -1 ) {/* 1 is odd */

      //console.log(number + " is even ")

      oddnum.push(number);
  }
})
  return oddnum
}

//
// Create a function that take an array and a function, and returns a new array with return value of the function on each of the elements of the array.
//
// mapArray([5,6], function(x) { return 2*x; }) should return [10,12]
// Hint: function mapArray(array, fun) { var returnArray = []; ... return returnArray; }
// Hint: use forEach on the given array to append the return value of the function applied to each element


//function(x) { return 2*x }

function mapArray(array, fn) {

  var returnArray = [];

  array.forEach(function(element) {

      returnArray.push(fn(element));

  })

  return returnArray;
}



// Create a function that take an array and a function, and returns a new array with only the elements for which the function returns true.
//
// filterArray([5,6,7], function(x) { return x>=6; }) should return [6,7]
// Hint: create a new array and use forEach on the given array, only appending the element if the function returns true


function filterArray(array, fn) {

  var ray = [];

  array.forEach(function(element) {

    ray.push(fn(element));

  })

  return ray

}














function filterArray(array, fn) {

  var ray = [];

  array.forEach(function(element) {

    if ((fn(element))) {

      ray.push((element))

    }

  })

  return ray

}






// Magic 8 Ball Challenge
// Story
//
// As a user I can enter a question on a web page and magically get an answer to my question.
// Goal:
//
// Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, then do the opposite, Your answer here.
// Input a question from the user.
// Create a random number to select one of the answers (hint: use Math.random() and change the magnitude).
// Output the question with the random answer.



function magic8Ball() {

  // var questions = prompt("What is your question?").toLowerCase()

  while (!(questions == "stop")) {
    var questions = prompt("What is your question?").toLowerCase()

    var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?",  "Ask: what would an Australian do, then do the opposite", "idk."];

    var randomNum = Math.floor(Math.random() * 5)

    return [questions, answers[randomNum]];

}
}







function magic8Ball() {

  // var questions = prompt("What is your question?").toLowerCase()

  while (true) {
    var questions = prompt("What is your question?").toUpperCase()

    if (questions === "STOP") {

      console.log("I have stopped")
      break;
    } else {

      // continue;
      var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?",  "Ask: what would an Australian do, then do the opposite", "idk."];

      var randomNum = Math.floor(Math.random() * 5)

      //console.log(questions + " " +  answers[randomNum]);
    return [questions, answers[randomNum]];
    }
//return [questions, answers[randomNum]];
}
}

































// Javascript Iteration Challenges
// For to While
//
// Re-write the following as a while loop:
//
// for (var i=0; i<10; i++) { console.log(i); }
// What is the value of i after the loop? Is it the same in both cases?

for (var i=0; i<10; i++) { console.log(i); }


var ind = 0;
while (ind < 10){console.log(i); ind++;}


// Re-write the following as a for loop:
//
// while (a > 0) {
//   console.log(a);
//   a = a - 1;
// }
// Is the value of a the same after the loop?

for (var a = 10; a > 0; a++) {

}

//

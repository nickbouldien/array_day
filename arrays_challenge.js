

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

  array.forEach (function(number){

    if(number % 2 == 0) {/* 1 is odd */

      console.log(number + " is even ")

      evnum.push(number)
  })
}
  return evnum
}






















//

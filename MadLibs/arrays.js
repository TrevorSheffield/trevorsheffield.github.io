/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

// Your code here



var q1 = ['image1.png', 'image2.png', 'image3.png'];
console.log("Answer for Question 1: " + q1);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

// Your code here

var q2 = q1.shift();
console.log("Answer for Question 2: " + q2);	

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

// Your code here

var q3 = q1.length;
console.log("Answer for Question 3: " + q3);


/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */

var q4 = q1.pop();
console.log("Answer for Question 4: " + q4)

// Your code here


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

// Your code here

var numArray = [1,2,3,4]

var addFunction = function(num) {
	console.log(num + 1)
};

numArray.forEach(addFunction);




/**
 * Question 2
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.
 */


var numArray = [1,2,3,4]

var avgFunction = function(num) {
	console.log(num +)
};

numArray.forEach(addFunction);

// Your code here
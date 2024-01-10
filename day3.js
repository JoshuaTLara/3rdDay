// Given the variables num1 and num2, write some code to evaluate the following:
// If num1 is less than num2, print to the console, "<num1> is less than <num2>"
// If num1 is greater than num2, print to the console, "<num1> is greater than <num2>"
// If num1 is equal to num2, print to the console, "These numbers are equal"
// Bonus: If either num1 or num2 is not a valid Number data type, print to the console, "Whoa, those aren't numbers!"

// const num1 = 'sean';
// const num2 = '300';

// if (isNaN(num1) || isNaN(num2)) {
//     console.log(`Whoa, those aren't numbers!`)
// } else if (num1 < num2) {
//     console.log('<num1> is less than <num2>')
// } else if (num2 < num1) {
//     console.log('<num1> is greater than <num2>')
// } else if (num2 === num1) {
//     console.log("These numbers are equal")
// } 
// const meals = ["pizza", "burger", "fries"]


// console.log(meals.length)

// const students = []

// students.push("Cat", "Ty", "Lincoln")

// students.unshift("Josh")

// console.log(students.slice(0, 3))


// console.log(students)

// const perfectTemp = 125
// let teaTemp = 130

// while (teaTemp > perfectTemp) {
//     teaTemp -= 1;
//     console.log(`tea temperature is now: ${teaTemp}`);
// }
// const students = ['Alice', 'Bob', 'Charlie', 'Diana'];

// // This is the use of a loop and index to find something within your array specifically while loop

// let i = 0; // i stands for index
// while (i < students.length) {
//   console.log(students[i]);

//   if (students[i] === 'Bob') {
//     console.log('Hi Bob!');
//     break; // we found Bob, no need to loop any further!
//   }
//   i += 1;
// }

//this is a "for" loop

// Count by 2: 0, 2, 4, 6, 8
// for (let n = 0; n < 10; n += 2) {
//     console.log(n);
//   }
  
//   // Countdown loop
//   for (let n = 10; n > 0; n -= 1) {
//     console.log(n);
//   }
//   console.log('Blast off!');


  // ((start) let i = 0; (stop) i < meals.length; (step) i += 1) this is the order of a "for loop"

  const grid = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
  }


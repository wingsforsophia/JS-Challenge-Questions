// 1. Factorials!

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// 5! = 1 * 2 * 3 * 4 * 5 = 120

// e.g.

// factorialize(5) // returns 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  // Well... welcome to the Unknown
}

// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

// function fizzBuzz() {
// let nums = []

// for (let i = 1; i <= 100; i++) {
//   nums.push(i)
// }



// let byThree = (nums.filter((num) => num % 3 === 0)) 
// let byFive = nums.filter(num => num % 5 === 0)
// let byThreeAndFive = nums.filter((num) => (num % 3 === 0) && (num % 5 === 0))

// console.log(byThree)

// }




function fizzBuzz(){
  for (let i = 1; i <= 100; i++){
    let output = ''
    if (i % 5 == 0 && i % 3 == 0){
    output += 'Fizz-Buzz' 
    } else if (i % 3 == 0) {
      output += 'Fizz'
    } else if (i % 5 == 0) {
      output += 'Buzz'
    } else {
      output += i
    }
    console.log(output)
  }
}
  
  
fizzBuzz()
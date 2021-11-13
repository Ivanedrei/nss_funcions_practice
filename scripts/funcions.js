/*
  For this practice assignment, make a new JavaScript file that you can use to write code that meets the below requirements.
*/

// Create an array of your favorite movies
const favoriateMovies = ["Marvel movies", "Passion of Christ", "Ben-Hur", "Divergent", "Narnia", "Maze runner"]
// Create a function to add a movie to the array
var newMovie = "hunger Games"
favoriateMovies.push(newMovie)
// Invoke the above function to add a movie to the array

// Create a function that loops through your movie array.  Add a conditional statement to differentiates one or more movies from the array.
for (const movie of favoriateMovies) {
  if (movie === "Marvel movies") {
    console.log(`${movie} are my favorite action movies!`)
  } else if (movie === "Passion of Christ" || movie === "Ben-Hur") {
    console.log(`The movie ${movie} impact my life!`)
  } else {
    console.log(`I would watch ${movie} again!`)
  }
}
// Create a function that concatinates three stings and returns that value
favoriateMovies.concat([
  "1",
  "2",
  "3"
])
// return favoriateMovies

// Invoke the function and console log the output
console.log(favoriateMovies)
// Create a function that console logs the multiplicative of 2 numbers
var num1 = 4
var num2 = 5

function numbers(num1, num2) {
  return num1 * num2
}
console.log(numbers)
// Invoke the function


// Bonus DataType Practice:
// create a ternary and console log it.

favoriateMovies[0] ? "Marvel movies" : "Maze runner")

console.log(true)
console.log(false)

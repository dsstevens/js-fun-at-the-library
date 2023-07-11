function createTitle(title) {
return `The ${title}`
  }
  console.log(createTitle("Storm's Awakening"));

function buildMainCharacter(name, age, pronouns) {
 console.log("name:", name)
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character
};

function saveReview(review,reviews){
reviews.push(review);
//add only unique reviews
//using the array of reviews
//expecting the length of the reviews array to be 2
//use the saveReview function to input multiple arg
// output should be line 87
// console.log(reviews)

// method to use for adding a unique review?
//.includes? .filter? 
//use an if statement?
// if !review == review
};











module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
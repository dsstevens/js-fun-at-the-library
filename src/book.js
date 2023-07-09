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








module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
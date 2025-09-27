// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = [
  {
    id: 1,
    content: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    id: 2,
    content: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    id: 3,
    content: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi"
  }
];

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
quotes.push(quote)
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  const filteID = quotes.findIndex(q => q.id === id)
  quotes.splice(filteID , 1)
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  const filteID = quotes.findIndex(q => q.id === id)
  if(filteID !== -1){
    quotes[filteID] = { ...quotes[filteID], ...updatedQuote };
  }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
// Add 3 quotes
addQuote({ id: 4, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' })
addQuote({ id: 5, content: 'Do or do not. There is no try.', author: 'Yoda' })
addQuote({
  id: 6,
  content: 'Simplicity is the ultimate sophistication.',
  author: 'Leonardo da Vinci'
})
// Delete 1 quote
deleteQuote(2)
// Update 1 quote
updateQuote(1, { content: 'Stay hungry. Stay foolish.', author: 'Jobs' })
// Print all quotes
console.log(getAllQuotes())


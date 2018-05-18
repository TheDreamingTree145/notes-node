const _ = require('lodash');
const fs = require('fs');

console.log('Starting notes.js');



// var note = {
//   title: title,
//   body: body
// }
var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  }
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

var getAll = () => {
  console.log('Getting All Notes');
};

var getNote = (title) => {
  console.log(`Getting ${title}`)
};

var removeNote = (title) => {
  console.log(`Removing ${title}`)
};

module.exports = {
  // addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote
};

// Small change for github
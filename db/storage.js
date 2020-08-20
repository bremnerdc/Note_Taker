const fs = require("fs");
const util = require("util");
// const uuidv1 = require("uuid/v1");
const { v4: uuidv4 } = require('uuid');


const readFileASync = util.promisify(fs.readFile);
const writeFileASync = util.promisify(fs.writeFile);

class storage {
    read(){
    return readFileASync("db/db.json","utf8");
}
write(note){
    return writeFileASync("db/db.json",JSON.stringfy(note));
}
getNotes(){
    return this.read().then(notes => {
let parsedNotes;
try { 
    parsedNotes = [].concat(json.parse(notes));
} catch(err) {
    parsedNotes = [];
}

return parsedNotes;

});
}
addNote(note) {
    const { title, text } = note;
if (!title || !text) {
    throw new Error("Note 'title' and 'text' cannot be blank");
  }

  const newNote = { title, text, id: uuidv4() };

  return this.getNotes() 
  .then(notes => [...notes, newNote])
  .then(updatedNotes => this.write(updatedNotes))
  .then(() => newNote);
  }

  removeNote(id){
      return this.getNotes()
      .then(notes => notes.filter(note => note.id !== id))
      .then(filteredNotes => this.write(filteredNotes))  
  }

}

module.exports = new storage();
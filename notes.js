
const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    
   const notes = loadNotes();
   let count = 1;
   if(notes.length ===0)
   {
       console.log('there is no note!');
   }
   else{
       for(let i =0;i<notes.length;i++)
       {
           console.log('note '+count);
           console.log(notes[i].title);
           console.log(notes[i].body);
           count++;
       }
   }
    
} //getNotes function.

const addNote = function (title, body) {
    const notes = loadNotes()
      const duplicateNode = notes.find(
          function(item) {
               return item.title === title;
      });  
  
        

      if(!duplicateNode)
      {
         notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }
    else {
        console.log('this node added before');
    }
  
} 




const saveNotes = function(notes) {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}  // end saveNodes function.


 const loadNotes = function () {

     try {
       const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
         return JSON.parse(dataJSON)
     } catch (e) {
        return []
     }

 } // End loadNotes function.


 const removeNote = function (title)
{
    const notes = loadNotes();
    const notExist  = notes.filter(function(note){
         return note.title === title;
    });
    if(notExist.length === 0) {
        console.log(chalk.red.inverse("note not found"));
    }
    else {
        const newNotes = notes.filter(function(note){
            return note.title!==title;
        })
        saveNotes(newNotes);
        console.log(chalk.green.inverse('note removed!'));
    }
} //end  removeNotes function. 

const readNode  = function(title) 
{
    const notes = loadNotes();
    const exactNote = notes.find((note) =>note.title===title)
    if(exactNote) {
    
        console.log(exactNote.body);
    } else {
         
        console.log(chalk.red('there is no note with is title'));
    }

}




module.exports = {
  getNotes,
  addNote,
  removeNote,
  readNode,
}
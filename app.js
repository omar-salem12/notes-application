const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');






//add, remove, read , list

// create add command
yargs.command({
    command:"add",
    describe:'Add a new note',
    builder: {
        title: {
            describe:'note title',
            demandOption:true,
            type:'string'
        },

        body: {
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv) {
   
       notes.addNote(argv.title,argv.body); 
    }

});

//create remove command
yargs.command({
    command:"remove",
    describe:"remove a note",
    builder:
    {
        title:
        {
            describe:"title of existed note",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv) {
        notes.removeNote(argv.title);
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'show all notes',
    handler:function() {
        notes.getNotes();
    }
})
// create a read command
yargs.command({
    command:'read',
    describe:'show specific notes',
    builder:
    {
        title:{
            describe:'input the title of node you want to read it',
            demandOption:true,
            type:'string',

        }
    },
    handler:function(argv) {
        readNode(argv.title);
    }
})
yargs.parse();
 
 





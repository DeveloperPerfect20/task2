
  const  fs = require ("fs")
 const yargs = require("yargs")

  
const data10 = require ("./data10")

yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
        data10.addPerson(x.fname , x.lname , x.city , x.age , x.id )
    }
 })

 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        data10.deleteData(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        data10.readData (x.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data10.listData()
    }
 })
 //////////////////////////////
 yargs.command ({
    command :"grades",
    describe : "grades data",
    builder : {
        grades : {
            describe : "this is id descriptio",
            demandOption : true,
            type : "array"
        }
    },
    handler : (x)=> {
        data10.grades  (x. grades)
    }
 })

   
  




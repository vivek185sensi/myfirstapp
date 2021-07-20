const exp = require('express')
const personrouter = exp.Router()
const app=exp()
const sql = require('mssql');

//method for requesting all data  from section table
personrouter.get('getdata', function (req, res, err) {
    // create Request object
    var request = new sql.Request();
    // query to the database and get the records
    request.query(" select * from Persons  ", function (err, tabledata) {
        if (err) {
            console.log(err)
        }
        else {
            // send records as a response
            // console.log("side data",tabledata.recordset)
            res.send(tabledata['recordset'])
        }

    });
});


personrouter.use(exp.json())
personrouter.post('insert',(req,res,err)=>{
    // create Request object
    var request = new sql.Request();
    request.query("INSERT INTO Persons (PersonID, LastName, FirstName,Address,City) VALUES ('" +req.body.PersonID+ "', '"+req.body.LastName+"', '"+req.body.FirstName+"','"+req.body.Address+"','"+req.body.City+"')",(err,success)=>{
        if(err){
            console.log("error in inserting",err)
        }
        else{
            // res.send({body:req.body})
            res.send({status:200,message:'inserted succesfully'})
        }
    })
})

 //write error handling middleware
 personrouter.use((err, req, res, next) => {
    res.send({ message: `error from persons API : ${err.message}` })
    console.log(`error from persons API : ${err.message}`)
  })


//exporting the persons api
module.exports = personrouter
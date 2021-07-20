const express= require('express');
var app = express()
var path=require('path')
var sql = require("mssql");

app.use(express.static(path.join(__dirname,"/dist/basicapp")))

var config = {
    user: 'sa',
    password: 'prosoft@123',
    server: '192.168.0.10',
    //192.168.0.10
    database: 'MARRBURE',
    encrypt: false,
    port: 1433
};

sql.connect(config, function (err) {

    if (err) console.log(err);
    console.log('connected to DB')
    var server = app.listen(7000, function () {
        console.log('Server is running on port no.7000');
    });
});

var personapi=require('./Apis/persons')
app.use('/persons',personapi)
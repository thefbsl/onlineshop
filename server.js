//import express from 'express'
const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const https = require('https')
const port = 3000;
app.use(bodyparser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static('public'));

//import path from 'path';
//import {fileURLToPath} from 'url';

//const __filename = fileURLToPath(import.meta.url);

//const __dirname = path.dirname(__filename);
/*console.log('directory-name', __dirname)
console.log(path.join(__dirname, '/dist', 'index.ejs','style.css'));*/

// app.use(express.static(__dirname + '/public'));
// app.use('/img', express.static('img'));

// app.get('/', (req, res) =>
// {
//      res.render("index")
// })
//
// app.get('/basket', (req, res) =>
// {
//      res.render("basket")
// })
//
// app.get('/signin', (req, res) =>
// {
//      res.render("signin")
// })
//
// app.get('/signin/signup', (req, res) =>
// {
//     res.render("signup")
// })
//
// app.get('/aboutus', (req, res) =>
// {
//     res.render("aboutus")
// })

app.use("/", require("./routes/index"));
app.use("/basket", require("./routes/basket"));
app.use("/signin", require("./routes/signin"));
app.use("/signin/signup", require("./routes/signup"));app.use("/aboutus", require("./routes/aboutus"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

app.post('/', ((req, res) => {
    let currency = req.body.currency
    let key = "47937961db-97cbc39b42-raoonu"
    let url = "https://api.fastforex.io//fetch-one?from=USD&to="+currency+"&api_key="+key
    //https://api.fastforex.io//fetch-one?from=USD&to=EUR&api_key=47937961db-97cbc39b42-raoonu
    https.get(url, function(response){
        response.on('data', data =>{
            let x = JSON.parse(data)
            let rate = x.result.
            res.send(x)
            res.send("one dollar is " + rate + " in + currency")
        })
    })
}))
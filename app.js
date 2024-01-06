const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
require('dotenv').config();

// Khai bao thư viện express 
const app = express();

// khai báo địa chỉ truy cập cho project 
const port = process.env.APP_PORT || 3000;
const host = process.env.APP_HOST || 'localhost';


app.set('port', port);
app.set('host', host);


app.set('views', './view')
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

// set up router 

app.use('/',router);





app.listen(app.get('port'), app.get('host'),()=>{
    console.log(`Server is running at http://${host}:${port}`);
    })


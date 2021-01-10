var express = require('express');
var path = require('path');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var helloRouter = require('./routes/hello');
var formRouter = require('./routes/form');
var formDataRouter = require('./routes/formdata');
var jsondataRouter = require('./routes/jsondata');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/hello',helloRouter);
app.use('/form',formRouter);
app.use('/formdata', formDataRouter);
app.use('/jsondata', jsondataRouter);

app.listen(3000);
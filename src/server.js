
const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/products',require('./routes/products'));

// Starting server
app.listen(app.get('port'), connect);


// Functions
function connect() {
    console.log(`Server on port ${app.get('port')}`)
}
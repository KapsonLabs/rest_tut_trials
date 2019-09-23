const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

//middleware
app.use(express.json())
app.use('/posts', postsRoute);

app.use('/posts', () => {
    console.log('This is the middlewarre running');
})

mongoose.connect(process.env.DB_CONNECTION,
 {useNewUrlParser: true},
 () => console.log('Connected to DB'))

//ROUTES
app.get('/' , (req, res) => {
    res.send('We are on home');
});

app.listen(3000)
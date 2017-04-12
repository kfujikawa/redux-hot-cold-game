const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  })
);

app.get('/fewest-guesses', (req, res, next) => {
  console.log('get request dude!');
});

app.post('/fewest-guesses', (req, res, next) => {
  console.log('incrementing number on a session');
  console.log('post request dude!');
});

app.listen(5000, () => {
  console.log('Express server running on port 5000!');
});

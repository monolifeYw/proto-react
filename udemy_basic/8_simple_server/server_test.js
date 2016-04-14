var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var animals = [
  'puppy', 'dog', 'cat', 'penguin'
];

var todoItems = [
  {
    id: 'lyw31136',
    'title': 'clean kitchen'
  },
  {
    id: 'kim',
    'title': 'kill vicious'
  },
  {
    id: 'park',
    'title': 'happy vacation'
  }
]

app.get('/animals', function(req, res) {
  res.send(animals);
});

app.get('/todo', function(req, res) {
  res.send(todoItems);
});

app.listen(6060);

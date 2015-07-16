var express = require('express');
var path = require('path');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 1337;

app.listen(port, function () {
  console.log('port 1337');
});


app.get('/', function (req, res) {
  res.render('index',
      { title : 'Содержание' }
  );
});
app.get('/about', function (req, res) {
  res.render('about',
      { title : 'О практиканте' }
  );
});


module.exports = app;

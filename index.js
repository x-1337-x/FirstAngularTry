var express =  require('express');
var app = express();
var path = require('path');
var port = 6245;
var apiRouter = express.Router();

// app.get('/', function(req, res) {
//   res.send("Sup!");
// });

app.listen(port, function() {
  console.log('App listens on port ' + port);
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

app.use(express.static(path.resolve('./public')));

app.use(express.static(path.resolve('../gmailCloneAngular')));

// app.use(apiRouter);

// apiRouter.route('/inbox').get();
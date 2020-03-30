var express = require('express');
var webApp = express();
var path = require('path');
webApp.use(express.static('dist'));
 
webApp.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})
 
webApp.listen(process.env.PORT || 3001);

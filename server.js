const express = require('express');
var forceSsl = require('force-ssl-heroku');
const path = require('path');
const enableProdMode = require('@angular/core').enableProdMode;

enableProdMode();

const app = express();

app.use(forceSsl);

app.use(express.static('./dist/codelabs-one-codeflix-frontend'));

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/dist/codelabs-one-codeflix-frontend/src/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
  console.log('Server started')
})

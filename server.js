const express = require('express');
const forceSsl = require('force-ssl-heroku');
const path = require('path');
const enableProdMode = require('@angular/core').enableProdMode;

enableProdMode();

const app = express();

app.use(forceSsl);

app.use(express.static('./dist/movie-api-frontend'));

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname,'/dist/movie-api-frontend/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
  console.log('Server started')
})

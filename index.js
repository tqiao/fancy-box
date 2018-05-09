const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const resolve = file => path.resolve(__dirname, file)
const app = express()

// const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

app.set('port', (process.env.port || 3000))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/imgs', express.static(resolve('imgs')))

app.get('/', function (req, res) {
  const fileName = 'index.html';
  const html = fs.readFileSync(resolve(fileName), 'utf-8')
  res.send(html)
})

app.get('/index.css', function (req, res) {
  const fileName = 'index.css';
  const css = fs.readFileSync(resolve(fileName), 'utf-8');
  res.setHeader("Content-Type","text/css");
  res.write(css);
  res.end();
//  res.send(css)
})


app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})

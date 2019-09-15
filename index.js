const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
var {getAllProduct, insertProduct, updateProduct, deleteProduct} = require('./controller/mysql/productController');
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets',express.static(__dirname + '/public'));


//home
app.get('/',(req, res) => {
  res.render('home_view');
});
//product
app.get('/product',(req, res) => {
  getAllProduct(req,res);
});
app.post('/product/save',(req, res) => {
  insertProduct(req,res);
});
app.post('/product/update',(req, res) => {
  updateProduct(req,res);
});
app.post('/product/delete',(req, res) => {
  deleteProduct(req,res);
});

//server listening
app.listen(8001, () => {
  console.log('Server is running at port 8001');
});

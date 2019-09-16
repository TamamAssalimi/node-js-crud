const {connection} = require('../../config/mysqlConnection.js');

function getAllProduct(req, res) {
    let sql = "SELECT * FROM product";
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        res.render('product_view', {
            results: results
        });
    });
}

function insertProduct(req, res){
    let data = {product_name: req.body.product_name, product_price: req.body.product_price};
    let sql = "INSERT INTO product SET ?";
    let query = connection.query(sql, data,(err, results) => {
        if(err) throw err;
        res.redirect('/product');
    });
}

function updateProduct(req,res){
    let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.body.id;
    executeQuery(sql,req,res);
}

function deleteProduct(req,res){
    let sql = "DELETE FROM product WHERE product_id="+req.body.product_id+"";
    executeQuery(sql,req,res);
}

function executeQuery(sql,req,res){
    let query = connection.query(sql, (err, results) => {
        if(err) throw err;
            res.redirect('/product');
    });
}
module.exports = {
    getAllProduct,
    insertProduct,
    updateProduct,
    deleteProduct
};

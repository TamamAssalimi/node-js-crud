const request = require('request');

module.exports = {
    getMethod : function(url){
        return new Promise((resolve, reject) => {
            console.log('url : '+ url);
            request(url, { json: true }, (err, res, body) => {
                if (err) reject(err);
                resolve(body)
            });
        })
    },
    postMethod : function (url,req) {
        return new Promise((resolve,reject )=>{
            console.log('url : '+ url);
            console.log('requestBody : '+req.body);
            request.post(url, {json: req.body}, (err, res, body) => {
                if (err) reject(err);
                resolve(body)
            })
        } );
    }
};

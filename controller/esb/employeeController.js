const apiHelper = require('../../config/apiHelper');

function getEmployee(url, res){
    apiHelper.getMethod(url)
        .then(response => {
            console.log(response);
            res.json(response)
        })
        .catch(error => {
            console.log(error);
            res.send(error)
        })
}

function insertEmployee(url,req, res){
    apiHelper.postMethod(url,req)
        .then(response =>{
            console.log(response);
            res.json(response)
        })
        .catch(error => {
            console.log(error);
            res.send(error)
        })
}

module.exports = {
    getEmployee,
    insertEmployee
};

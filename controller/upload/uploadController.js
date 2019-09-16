function singleUpload(req,res,next){
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error)
    }
    res.send(file);
}

function multipleUpload(req,res,next) {
    const files = req.files;
    if (files.length<1) {
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error)
    }
    res.send(files);
}
function uploadImage(req,res) {
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database
    var finalImg = {
        contentType: req.file.mimetype,
        image:  new Buffer(encode_image, 'base64')
    };
    db.collection('quotes').insertOne(finalImg, (err, result) => {
        console.log(result)

        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')


    })
}

module.exports ={
    singleUpload,
    multipleUpload,
    uploadImage
};

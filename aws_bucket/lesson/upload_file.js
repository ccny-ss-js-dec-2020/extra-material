const fs = require('fs');
const path = require('path');

const aws = require('aws-sdk');
const s3 = new aws.S3();
const multer = require('multer');
const BUCKET = 'web-development-teaching'

// configuration setup for uploading local files to s3
const storage = multer.diskStorage({
    destination: function(req, file, callback){
    	callback(null, './images/soundgarden');
    },
    filename: function(req, file, callback){
        callback(null, 'Soundgarden.jpg');
    }
});
const upload = multer({storage: storage});

function uploadLocalFileToS3(localFilePath, pathWhenUploadingToS3){
  const params = {Bucket: BUCKET, Key: pathWhenUploadingToS3, Body: ''};
  const fileStream = fs.createReadStream(path.join(__dirname, localFilePath));
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });
  params.Body = fileStream;

  s3.upload(params, function(err, data) {
  	if(err){
  		console.error(err)
  	} else {
  		console.log("Successful Image Upload");
      console.log(data)
  	}
  });
}

uploadLocalFileToS3('./images/soundgarden/Soundgarden.jpg', "soundgarden/Soundgarden.jpeg")

const fs = require('fs')
const aws = require('aws-sdk');
const s3 = new aws.S3();
const BUCKET = 'web-development-teaching'

function getFileFromS3AndStoreLocally(fileName){
  // Getting the file from S3
  s3.getObject({
    Bucket: BUCKET,
    Key: fileName
  }, (err, data) => {
    if (err) console.error(err);
    // Storing file locally ... in this lesson directory
    fs.writeFileSync(`./images/${fileName}`, data.Body);
  });
}

//kurt.jpeg is a picture that i have stored in my aws storage.
//im pulling it from storage and storing it locally
getFileFromS3AndStoreLocally("nirvana/kurt.jpeg")

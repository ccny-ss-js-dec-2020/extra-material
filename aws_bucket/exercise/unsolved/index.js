const fs = require('fs')
const aws = require('aws-sdk');
const s3 = new aws.S3();
const BUCKET = 'web-development-teaching'

function getFileFromS3AndStoreLocally(fileName){
  s3.getObject({
    Bucket: BUCKET,
    Key: fileName
  }, (err, data) => {
    if (err) console.error(err);
    /*
      Here, create the folders inside of this directory
      to store the files that you are pulling from s3
    */
  });
}

function listAllObjectsInBucketFolder(folderName){
  s3.listObjects({Bucket: BUCKET}, function(err, data) {
    /*
      1. Use the S3 List Objects function to get all of the Objects
      that are within a folder in your s3 bucket
      2. Save all of those objects locally in this project directory
    */
  });
}
listAllObjectsInBucketFolder("nirvana");

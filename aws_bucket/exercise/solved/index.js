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
    if (!fs.existsSync("./images/")){
      fs.mkdirSync("./images/");
    }
    if (!fs.existsSync("./images/" + fileName.split("/")[0])){
      fs.mkdirSync("./images/" + fileName.split("/")[0]);
      fs.writeFileSync(`./images/${fileName}`, data.Body);
    }
  });
}

function listAllObjectsInBucketFolder(folderName){
  s3.listObjects({Bucket: BUCKET}, function(err, data) {
    data.Contents.forEach((obj) => {
      if(obj.Key.includes(folderName) && obj.Key.split("/")[1]){
        getFileFromS3AndStoreLocally(obj.Key)
      }
    })
  });
}
listAllObjectsInBucketFolder("nirvana");

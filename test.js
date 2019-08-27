const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
AWS.config.update({
    secretAccessKey: 'KIn+VgfLsExOxQNExTdYxqlP0FvFfQkQDOH6mOYE',
    accessKeyId: 'AKIAQRIZMKUSQOPVSLJV'});

var s3 = new AWS.S3();
var filePath = "./email/emailSetting.js";

//configuring parameters
var params = {
  Bucket: 'repairkaki',
  Body : fs.createReadStream(filePath),
  Key : "folder/"+Date.now()+"_"+path.basename(filePath)
};

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});
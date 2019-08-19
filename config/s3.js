var multer  = require('multer'),
    multerS3 = require('multer-s3'),
    AWS = require('aws-sdk');

AWS.config.update({
secretAccessKey: 'lwmI9sINcLUMQr3ihptxZJZpM/FeQzQ6nh5aTakA',
accessKeyId: 'AKIAQRIZMKUS6EHV3S5Q'});

var s3 = new AWS.S3();


module.exports.upload=multer({
    storage: multerS3({
      s3: s3,
      bucket: 'repairkaki',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, `partner-${Date.now().toString()}-${file.originalname}`)
      }
    })
  })

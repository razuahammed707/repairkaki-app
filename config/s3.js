var multer  = require('multer'),
    multerS3 = require('multer-s3'),
    AWS = require('aws-sdk');

AWS.config.update({
secretAccessKey: 'KIn+VgfLsExOxQNExTdYxqlP0FvFfQkQDOH6mOYE',
accessKeyId: 'AKIAQRIZMKUSQOPVSLJV'});

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

module.exports.quote=multer({
  storage: multerS3({
    s3: s3,
    bucket: 'repairkaki/quote',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, `quote-${Date.now().toString()}-${file.originalname}`)
    }
  })
})


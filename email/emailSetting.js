"use strict";
const nodemailer = require("nodemailer");
var template=require("./templates/emailVerification")

// async..await is not allowed in global scope, must use a wrapper
async function main(email,user,token){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "AKIAQRIZMKUSWH6CJ7FV", // generated ethereal user
      pass: "BABoZWKxnoT+HFJC60EYsL5rCWC2ChJIJGkLoEFI3jgz" // generated ethereal password
    }
  });


  console.log(email)
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "'RepairKaki'<donotreply@repairkaki.com>", // sender address
    to: email, // list of receivers
    subject: "✔Welcome to Repairkaki", // Subject line
    text: "Hello world?", // plain text body
    html: template.verify(user,token) // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports.verify=main
"use strict";
const nodemailer = require("nodemailer");
var EmailTemplate=require("./templates/emailVerification")

// async..await is not allowed in global scope, must use a wrapper

async function main(info,template){

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

  

  if(template==="verify"){
      // send mail with defined transport object
      let emailFeedback = await transporter.sendMail({
        from: "'RepairKaki'<donotreply@repairkaki.com>", // sender address
        to: info.email, // list of receivers
        subject: "✔Welcome to Repairkaki", // Subject line
        html: EmailTemplate.verify(info.name,info.token) // html body
      });
      console.log("Message sent: %s", emailFeedback.messageId);

  }

  if(template==="reset_password"){
    // send mail with defined transport object
    let emailFeedback = await transporter.sendMail({
      from: "'RepairKaki'<donotreply@repairkaki.com>", // sender address
      to: info.email, // list of receivers
      subject: "Reset your password", // Subject line
      html: EmailTemplate.resetPassword(info.name,info.token) // html body
    });
    console.log("Message sent: %s", emailFeedback.messageId);

}






}

module.exports.verify=main
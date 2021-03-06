exports.verify=(username,token)=>{
   return(`
   <table style="max-width: 650px;display:block;margin:0 auto;"  cellspacing="0" cellpadding="0">

    <tr>
    <td><img width="100%" style="margin:10px 0;"src="http://www.repairkaki.com/asset/IMG_7049.JPG"></td>
    </tr>
    <tr>
    <td>
        <h1 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 18px; color:#d20f35">Welcome, Partner!        </h1>    
    </td>

    </tr>
    <tr>
        <td style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 18px;">Hi ${username}, Thank you for choosing to be part of the RepairKaki Family. Do verify your email below so we can start setting up your account and have you seeing more customers soon.</td>
    </tr>
    <tr>
        <td><a href="${token}" style="background: #d20f35; color:#fff;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; padding: 10px 30px; margin: 20px 0; display: inline-block; text-decoration: none ">VERIFY EMAIL</a></td>
    </tr>
    <tr>
        <td>
            <table>
                <tr>
                    <td><a href="https://www.facebook.com/RepairKaki-307109963541556/"><img style="width:30px;" src="http://www.repairkaki.com/asset/facebook.png"></a></td>
                    <td><a href="https://twitter.com/repairkaki"><img style="width:30px;" src="http://www.repairkaki.com/asset/twiter.png"></a></td>
                    <td><a href="https://www.instagram.com/repairkaki"><img style="width:30px;" src="http://www.repairkaki.com/asset/instragram.png"></a></td>
                </tr>
            </table>
        </td>
    </tr>
    </table>
   `)
};

exports.resetPassword=(username,token)=>{
    return(`
    <table style="max-width: 650px;display:block;margin:0 auto;"  cellspacing="0" cellpadding="0">
    <tr>
    <td style="margin: 20px 0; display:block">
    <img src="http://www.repairkaki.com/asset/repairkaki_logo.png" style="width:150px; display: block; margin: 0 auto;">
     </td> 
 </tr>

 <tr>
    <td>
       <h1 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 18px; color:#d20f35">Reset Password</h1>    
    </td>
 
 </tr>
    <tr>
        <td style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 18px;">Hello Mr ${username}, <br>Someone has asked to reset the password for your account. 
        If you did not request a password reset, you can disregard this email. 
        No changes have been made to your account.<br>
        To reset your password, follow this link </td>
    </tr>
    <tr>
        <td><a href="${token}" style="background: #d20f35; color:#fff;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; padding: 10px 30px; margin: 20px 0; display: inline-block; text-decoration: none ">Rest Password</a></td>
    </tr>
    <tr>
        <td>
            <table>
                <tr>
                    <td><a href="https://www.facebook.com/RepairKaki-307109963541556/"><img style="width:30px;" src="http://www.repairkaki.com/asset/facebook.png"></a></td>
                    <td><a href="https://twitter.com/repairkaki"><img style="width:30px;" src="http://www.repairkaki.com/asset/twiter.png"></a></td>
                    <td><a href="https://www.instagram.com/repairkaki"><img style="width:30px;" src="http://www.repairkaki.com/asset/instragram.png"></a></td>
                </tr>
            </table>
        </td>
    </tr>
 </table>
    
    `)
}


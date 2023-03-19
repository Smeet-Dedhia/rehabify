const nodeMailer = require("nodemailer");

const sendEmail = async(req,res)=>{

    const nodeMailer = require("nodemailer");

    const sendEmail = async(req,res)=>{
        const transporter= nodeMailer.createTransport({
            service:process.env.SMPT_SERVICE,
            auth:{
                user:process.env.SMPT_MAIL,
                pass:process.env.SMPT_PASSWORD,
            }
        })
    
        const mailOptions ={
            from :process.env.SMPT_MAIL,
            to:options.email,
            subject:options.subject,
            text:options.message,
        };
    
        await transporter.sendMail(mailOptions);
    };
    
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       type: 'OAuth2',
    //       user: process.env.MAIL_USERNAME,
    //       pass: process.env.MAIL_PASSWORD,
    //       clientId: process.env.OAUTH_CLIENTID,
    //       clientSecret: process.env.OAUTH_CLIENT_SECRET,
    //       refreshToken: process.env.OAUTH_REFRESH_TOKEN
    //     }
    //   });
    
}

module.exports=sendEmail;
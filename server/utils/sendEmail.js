const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: "<p>Welcome to Rehabify!</p><br> <p>Congrats on making the decision to meet with our medical professionals and combat substance, one day at a time.</p><br><p>You selected your slot as <b>Monday, 20 Mar, 8:00 AM.</b></p> <br><b>Please join the call at the following link: </b><a href=`https://meet.google.com/qie-nsot-gci`>https://meet.google.com/qie-nsot-gci</a><br> <p>If you have any queries, or require additional assistance, contact us - <a href=`mailto:support@rehabify.com`>support@rehabify.com</a>",
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

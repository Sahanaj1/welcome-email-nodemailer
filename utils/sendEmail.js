const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASS,
  },
});


const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.USERNAME, 
      to, 
      subject, 
      text, 
    });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; 
  }
};

module.exports = sendEmail;

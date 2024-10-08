const nodemailer = require("nodemailer");
require("dotenv").config();
const mailSender = async (email, title, body) => {
    try{
        console.log("Creating transport")
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })
            console.log("transport created and sending mail")


            let info = await transporter.sendMail({
                from: 'StudyNotion - by Arvind Sharma',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log("MAIL INFO",info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;
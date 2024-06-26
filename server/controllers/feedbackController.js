const {validationResult} = require("express-validator");
const nodemailer = require("nodemailer");

const feedback = async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: "gqza payc bdsz mdho",
        },
    });
    let mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: `${process.env.SUBJECTPREFIX}: ${req.body.subject}`,
        html: 
        `<div>
        <p>From: ${req.body.email}</p>
        <p>Subject: ${req.body.subject}</p>
        <p>${req.body.text}</p>
        </div>`,
    };
    transporter.sendMail(mailOptions, function(error,info){
        if (error){
            console.log(error);
            return res.json({message:"Error: Message not sent"});
        } else {
            console.log("Email sent: " + info);
            return res.json({message: "Message sent!"});
        }
    });
};

module.exports = { feedback };
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

dotenv.config();


router.post('/', (req, res) => {
    const msg = {
        to: req.body.reciever,
        from: req.body.sender,
        subject: 'Inquire',
        text: req.body.emailText,
        html: `<strong>${req.body.emailText}</strong>`,
    };
    sgMail.send(msg)
        .then((result) => {
            console.log(result)
            res.sendStatus(200)
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500)
        });
});

module.exports = router;
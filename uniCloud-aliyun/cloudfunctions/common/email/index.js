let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
     service: 'xxx',
     auth: {
         user: 'xxxxxx',
         pass: 'xxxx'
     }
});

module.exports = transporter
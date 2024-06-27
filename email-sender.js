const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'romassma@hotmail.fr',
      pass: 'dellinspiron22'
    }
  });
  var mailOptions = {
    from: 'romassma@hotmail.fr',
    to: 'ghadakhaldi7@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

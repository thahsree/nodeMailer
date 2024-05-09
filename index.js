const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
    user: "thashreef220@gmail.com",
    pass: "klaqvetgrhtwfjku",
  },
});

async function main() {
    let otp = Math.floor(Math.random() * 9000) + 1000;
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: {
        name:"Thashreef",
        address:"thashreef220@gmail.com"
      }, // sender address
      to: "ashin209@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>Mail sent using nodemailer</b>`, // html body
    });
  
    console.log(`Message sent: %s`, info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);
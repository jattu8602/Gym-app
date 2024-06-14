import nodeMailer from "nodemailer";

export const sendEmail  = async(option)=>{
  const transporter  = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service:process.env.SMTP_SERVICE,

    // secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMTP_MAIL, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: `${options.message} \n\n Email of User Who Sent The Message: ${options.userEmail}`,

   // html: option.html, // html body
  };
  await transporter.sendMail(mailOptions);








};
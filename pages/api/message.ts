// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'; 
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
});

const emailObj = (email: string, message: string) => ({
  from: process.env.EMAIL,
  to: 'adithya31101@gmail.com',
  subject: 'Message from portfolio website',
  text: `Message sent by ${email}..\n\nThe message:\n\n ${message}`
});

const sendEmail = (email: string, message: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(emailObj(email, message), (err, info) => {
      err? reject(err.message) : resolve(info.response)
    })
  })
}


export default (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "POST"){
    const {email, message} = req.body;
    sendEmail(email, message)
    .then(message => {
      return res.status(201).json({message: "success"});
    })
    .catch(e => {
      console.log("Error in sending email, error: " + e);
      return res.status(500).json({error: 'Error in sending email'});
    })
  }
  return res.status(400).json({ error: 'Bad Request' });
}

import { SendEmail, SendEmailData } from "../send-email";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8feda7dba4e6a7",
    pass: "8b4f2302b15bee"
  }
});

export class NodemailerSendEmail implements SendEmail{
  async sendEmail({ subject, body }: SendEmailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oI@feedget.com>',
      to: 'Caio Martins <caio-1402@hotmail.com>',
      subject,
      html: body,
    })
  }
}
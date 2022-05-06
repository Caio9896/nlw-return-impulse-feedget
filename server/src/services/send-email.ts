export interface SendEmailData {
  subject: string;
  body: string;
}

export interface SendEmail {
  sendEmail: (data: SendEmailData) => Promise<void>
}
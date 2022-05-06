import express from 'express'
import { SubmitFeedbackUseCase } from './functions/submit-feedback-use-cases';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerSendEmail } from './services/nodemailer/nodemailer-send-email';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedbackRepository = new PrismaFeedbacksRepository()
  const nodemailerSendEmail = new NodemailerSendEmail()
  const feedbackUseCase = new SubmitFeedbackUseCase(feedbackRepository, nodemailerSendEmail)

  feedbackUseCase.execute({
    type,
    comment,
    screenshot
  })  

  return res.status(201).json({ Data: 'Success'})
})
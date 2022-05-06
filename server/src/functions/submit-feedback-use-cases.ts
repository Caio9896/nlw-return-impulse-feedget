import { FeedbacksRepository } from "../repositories/feedback-repository-db";
import { SendEmail } from '../services/send-email'


interface SubmitFeedbackFunctionsRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {

  constructor ( 
    private feedbackRepository: FeedbacksRepository,
    private SendEmail: SendEmail,
  ){}

  async execute(request: SubmitFeedbackFunctionsRequest) {
    const { type, comment, screenshot  } = request;

    if (!type) {
      throw new Error('Type is required.');
    }

    if (!comment) {
      throw new Error('Comment is required.');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    })

    await this.SendEmail.sendEmail({
      subject: 'Cadastro de Novo Feedback',
      body: [
        `<p>Tipo de Feedback: ${type}<p/>`,
        `<p>Comentário: ${comment}<p/>`,
        screenshot ? `<img src=${screenshot} />` : null
      ].join('/n')
    }
      
    )
  }
}
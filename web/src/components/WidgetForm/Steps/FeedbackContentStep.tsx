import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../libs/api";
import { CloseButton } from "../FeedBackFunctions/CloseButton";
import { Loading } from "../FeedBackFunctions/Loading";
import { ScreenshotButton } from "../FeedBackFunctions/ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onHandleFeedbackReturn: () => void;
  feedbackSend: () => void;
}

export function FeedbackContentStep({ feedbackType, onHandleFeedbackReturn, feedbackSend }: FeedbackContentStepProps) {
  const [screenshot, isScreenshot] = useState<string | null>(null)
  const [comment, isComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)


  const feedbackTypeInfo = feedbackTypes[feedbackType]

  

  async function handleSubmitFeedback(event: FormEvent){
    event.preventDefault();

    setIsSendingFeedback(true)
    try {  
      const sut = await api.post('/feedbacks', {
        type: feedbackType,
        comment: comment,
        screenshot: screenshot,
      })

      feedbackSend()

    } catch (e) {
      console.log(e)
      setIsSendingFeedback(true);
    }
  }

  return (
    <>
      <header className="">

        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={() => onHandleFeedbackReturn()}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex gap-2 items-center">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Descreva aqui o seu problema!"
          onChange={(e) => isComment(e.target.value)}
        />

        <footer className="w-full gap-2 flex mt-2">

          <ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTaked={isScreenshot}
          />

          <button type="submit"
            className="p-2 bg-brand-500 rounded-prsn border-transparent flex-1 flex justify-center items-center text-sm transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {
              isSendingFeedback ?
                <Loading />
              :
                'Enviar Feedback'
            }
          </button>
        </footer>
      </form>
    </>
  )
}
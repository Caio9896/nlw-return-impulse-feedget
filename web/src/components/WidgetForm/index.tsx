import { useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from '../../assets/Bug.svg'
import ideaImageUrl from '../../assets/Idea.svg'
import thoughtImageUrl from '../../assets/Thought.svg'
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";




export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSend, isFeedbackSend] = useState(false)

  function handleBackToTypeStep() {
    isFeedbackSend(false)
    setFeedbackType(null)
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSend ? (
        <FeedbackSuccessStep 
          isFeedbackSend={handleBackToTypeStep}
        />
      ) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeStepChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep
                feedbackType={feedbackType}
                onHandleFeedbackReturn={handleBackToTypeStep}
                feedbackSend={() => isFeedbackSend(true)}
              />
            )}
          </>
        )
      }

      <footer className="text-xs text-neutral-400">
        <p>
          Feito por <a className="underline underline-offset-2" href='https://github.com/Caio9896' target='_blank'>Caio Martins</a>
        </p>
      </footer>

    </div>
  )
}
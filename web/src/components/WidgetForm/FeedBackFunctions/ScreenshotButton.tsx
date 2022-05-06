import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "./Loading";


interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaked: (screenshot: string | null) => void;
}

export function ScreenshotButton({ onScreenshotTaked, screenshot }: ScreenshotButtonProps) {

  const [takingASreenshot, isTakingASreenshot] = useState(false)

  async function handleTakeAScreenshot(){
    isTakingASreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTaked(base64image)
    isTakingASreenshot(false)
  }

 if(screenshot){
  return (
    <button
      type="button"
      className="p-1 w-10 h-10 rounded-prsn border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      style={{
        background: `url(${screenshot})`,
      }}
      onClick={() => onScreenshotTaked(null)}
    >
      <Trash weight="fill"/>
    </button>
  )
 }

  return (
    <button
          type="button"
          className="p-2 bg-zinc-800 rounded-prsn border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={handleTakeAScreenshot}
          >
            { takingASreenshot? <Loading /> : <Camera className="h-6 w-6 text-zinc-100"/>}
    </button>
  )
}
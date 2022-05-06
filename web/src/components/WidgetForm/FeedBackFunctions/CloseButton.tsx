import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton(){
  return (
    <Popover.Button className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100" title="fechar formulario de Feedback">
      <X weight="bold" className="top-4 right-4"/>
    </Popover.Button>
  )
}
import { Moon, Sun } from 'phosphor-react'
import useDarkMode  from '../../../hooks/useDarkMode'

export function ButtonTheme() {

  const [colorTheme, setTheme] = useDarkMode()
  console.log(colorTheme)
  
  return (
    <div className='flex justify-end'>
      <button 
      className=" dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-300 dark:hover:text-zinc-800 bg-zinc-300 text-zinc-900 py-2 px-2 rounded-full mr-4 mt-4 hover:bg-zinc-500 hover:text-zinc-200  transition-colors"
      onClick={() => setTheme(colorTheme)} 
      >
      {colorTheme === 'light' ?
        <Sun 
          weight='fill'
          height={20}    
          width={20}
        />
      :
      <Moon 
          weight='fill'
          height={20}    
          width={20}

        />
    }
    </button>
    </div>
  )
}
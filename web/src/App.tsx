import { ButtonTheme } from "./components/Header/ButtonTheme";
import { Widget } from "./components/Widget";
import useDarkMode from "./hooks/useDarkMode";

export function App(){
  useDarkMode()
  return (
    <>
      <ButtonTheme />
      <Widget />
    </>
  )
}
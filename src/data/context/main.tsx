import { createContext } from "react"
import { useHooksContextMain, useHooksModal } from "../hooks/context"
import { ContextTheme } from "./theme"
import { ContextModal } from "./modal"

export const ContextMain = createContext({
  theme: ContextTheme,
  modal: ContextModal
})

const ContextMainProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const theme = useHooksContextMain()
    const modal = useHooksModal()
    return <ContextMain.Provider value={{
      theme,
      modal,
    }}>
      {children}
    </ContextMain.Provider>
}
export default ContextMainProvider
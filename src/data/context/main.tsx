import { createContext } from "react"
import { useHooksContextMain, useHooksModal } from "../hooks/context"
import { ContextTheme } from "./theme"
import { ContextModal } from "./modal"

export const ContextMain = createContext({
  theme: ContextTheme,
  modalForm: ContextModal,
  modalFormUpdate: ContextModal,
})

const ContextMainProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const theme = useHooksContextMain()
    const modalForm = useHooksModal()
    const modalFormUpdate = useHooksModal()
    return <ContextMain.Provider value={{
      theme,
      modalForm,
      modalFormUpdate,
    }}>
      {children}
    </ContextMain.Provider>
}
export default ContextMainProvider
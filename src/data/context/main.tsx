import { createContext } from "react"
import { useHooksContextMain, useHooksModal, useHooksModalConfirmation } from "../hooks/context"
import { ContextTheme } from "./theme"
import { ContextModal } from "./modal"

export const ContextMain = createContext({
  theme: ContextTheme,
  modalForm: ContextModal,
  modalConfirmation: {
    delete: ContextModal,
    failed: ContextModal,
    completed: ContextModal,
  },
})

const ContextMainProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const theme = useHooksContextMain()
    const modalForm = useHooksModal()
    const modalConfirmation = useHooksModalConfirmation()
    return <ContextMain.Provider value={{
      theme,
      modalForm,
      modalConfirmation,
    }}>
      {children}
    </ContextMain.Provider>
}
export default ContextMainProvider
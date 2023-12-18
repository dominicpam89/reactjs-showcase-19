import { createContext } from "react"
import { useHooksContextMain, useHooksModal, useHooksModalDeleteConfirmation } from "../hooks/context"
import { ContextTheme } from "./theme"
import { ContextModal } from "./modal"

export const ContextMain = createContext({
  theme: ContextTheme,
  modal: ContextModal,
  modalDeleteConfirmation: ContextModal,
})

const ContextMainProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const theme = useHooksContextMain()
    const modal = useHooksModal()
    const modalDeleteConfirmation = useHooksModalDeleteConfirmation()
    return <ContextMain.Provider value={{
      theme,
      modal,
      modalDeleteConfirmation
    }}>
      {children}
    </ContextMain.Provider>
}
export default ContextMainProvider
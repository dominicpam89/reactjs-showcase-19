import { createContext } from "react"
import { useHooksContextTheme, useHooksContextThemeSelect, useHooksModal } from "../hooks/context"
import { ContextTheme, ContextThemeSelection } from "./theme"
import { ContextModal } from "./modal"

export const ContextMain = createContext({
  theme: ContextTheme,
  themeSelection: ContextThemeSelection,
  modalForm: ContextModal,
  modalFormUpdate: ContextModal,
})

const ContextMainProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const theme = useHooksContextTheme()
    const themeSelection = useHooksContextThemeSelect()
    const modalForm = useHooksModal()
    const modalFormUpdate = useHooksModal()
    return <ContextMain.Provider value={{
      theme,
      themeSelection,
      modalForm,
      modalFormUpdate,
    }}>
      {children}
    </ContextMain.Provider>
}
export default ContextMainProvider
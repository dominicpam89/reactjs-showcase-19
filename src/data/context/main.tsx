import { createContext } from "react"
import { useHooksContextMain } from "../hooks/context"

export type TypeThemeSelection = "theme-default"|"theme-relax"|"theme-earth"
export type TypeContext = {
  theme:{
    current: TypeThemeSelection,
    changeTheme: (selectedTheme:TypeThemeSelection)=>void
  }
}

export const ContextMain = createContext<TypeContext>({
  theme:{
    current: "theme-default",
    changeTheme: (selectedTheme)=>{selectedTheme}
  }
})

const ContextMainProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const theme = useHooksContextMain()
    return <ContextMain.Provider value={{
      theme
    }}>
      {children}
    </ContextMain.Provider>
}
export default ContextMainProvider
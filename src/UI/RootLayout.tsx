import { useContext } from "react"
import { ContextMain } from "../data/context/main"
import { Outlet } from "react-router-dom"

const UIRootLayout = () => {
  const context = useContext(ContextMain)
  const twClasses = {
    header: ``,
    main: `${context.theme.current} p-12`
  }
  return <>
    <header className={twClasses.header}>
      
    </header>
    <main className={twClasses.main}>
      <Outlet />
    </main>
  </>
}
 
export default UIRootLayout;
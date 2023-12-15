import { useContext } from "react"
import { ContextMain } from "../data/context/main"
import { Outlet } from "react-router-dom"
import { UINotificationPlacement } from "./Notification"

const UIRootLayout = () => {
  const context = useContext(ContextMain)
  const twClasses = {
    header: `${context.theme.current}`,
    main: `${context.theme.current} relative`
  }
  return <>
    <UINotificationPlacement />
    <header className={twClasses.header}></header>
    <main className={twClasses.main}>
      <Outlet />
    </main>
  </>
}
 
export default UIRootLayout;
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { useHooksMediaQuery } from "../../data/hooks/media-query"


const HomeBackground = () => {
  const context = useContext(ContextMain)
	const desktopView = useHooksMediaQuery(`(min-width:768px)`)

  let imgUrl = ""
	if (context.theme.current === "theme-default")
		imgUrl = desktopView ? "/theme-default/hero-desktop.jpg" : "/theme-default/hero-mobile.jpg"
	else if (context.theme.current === "theme-earth")
		imgUrl = desktopView ? "/theme-earth/hero-desktop.jpg" : "/theme-earth/hero-mobile.jpg"
	else imgUrl = desktopView ? "/theme-relax/hero-desktop.jpg" : "/theme-relax/hero-mobile.jpg"

  return <>
    <img src={imgUrl} className="-z-50 fixed top-0 left-0 h-[120%] w-full object-cover" />
  </>
}
 
export default HomeBackground;
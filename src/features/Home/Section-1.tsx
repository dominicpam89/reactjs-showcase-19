import { useContext } from "react"
import { useHooksMediaQuery } from "../../data/hooks/media-query"
import { ContextMain } from "../../data/context/main"

const HomeSection1 = () => {
	const context = useContext(ContextMain)
	const desktopView = useHooksMediaQuery(`(min-width:768px)`)

	let imgUrl = ""
	if (context.theme.current === "theme-default")
		imgUrl = desktopView ? "/theme-default/hero-desktop.jpg" : "/theme-default/hero-mobile.jpg"
	else if (context.theme.current === "theme-earth")
		imgUrl = desktopView ? "/theme-earth/hero-desktop.jpg" : "/theme-earth/hero-mobile.jpg"
	else imgUrl = desktopView ? "/theme-relax/hero-desktop.jpg" : "/theme-relax/hero-mobile.jpg"

	const twClasses = {
		container: `relative w-full min-h-screen p-12 flex flex-col space-y-3 items-center`,
		heading: `text-2xl font-light text-primary-main-contrast`,
		title: `text-5xl font-black text-primary-main-contrast [text-shadow:_2px_2px_5px_rgba(var(--color-primary-main-contrast),30%)]`,
	}

	return (
		<>
			<div id="section-1" className={twClasses.container} style={{
          background: `linear-gradient(180deg, rgba(var(--color-primary-main),70%), rgba(var(--color-primary-dark),70%)), url(${imgUrl})`

      }}>
				<h1 className="mt-24 flex flex-col items-center space-y-2">
					<span className={twClasses.heading}>Take control of</span>
					<span className={twClasses.heading}>your day with</span>
					<span className={twClasses.title}>Fancydo</span>
				</h1>
			</div>
		</>
	)
}

export default HomeSection1

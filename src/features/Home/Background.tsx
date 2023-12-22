import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { useHooksMediaQuery } from "../../data/hooks/media-query"

const HomeBackground = () => {
	const context = useContext(ContextMain)
	const desktopView = useHooksMediaQuery(`(min-width:768px)`)

	let imgUrl = ""
	if (context.theme.current === "theme-default" || context.theme.current === "theme-default-invert")
		imgUrl = desktopView ? "/theme-default/hero-desktop.jpg" : "/theme-default/hero-mobile.jpg"
	else imgUrl = desktopView ? "/theme-relax/hero-desktop.jpg" : "/theme-relax/hero-mobile.jpg"

	return (
		<>
			<svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="-z-40 fixed opacity-50">
				<filter id="noiseFilter">
					<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
				</filter>
				<rect width="1000%" height="1000%" filter="url(#noiseFilter)" />
			</svg>
			<img src={imgUrl} className="-z-50 fixed top-0 left-0 h-[120%] w-full object-cover" />
		</>
	)
}

export default HomeBackground

import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"

export default function Section3_Brand(){
	const {theme} = useContext(ContextMain)
	const logoSrc =
		theme.current === "theme-default" || theme.current === "theme-relax"
			? "/logo/logo-white-sm.png"
			: theme.current === "theme-default-invert"
			? "/logo/logo-default-sm.png"
			: "/logo/logo-relax-sm.png"
	const twClasses = {
		container: `flex flex-row space-x-5 items-center justify-center`,
		logo: `h-14 w-auto opacity-80`,
		title: `text-3xl font-extrabold text-primary-main-contrast [text-shadow:_2px_2px_5px_rgba(var(--color-primary-main-contrast),30%)] opacity-80`,
	}

	return (
		<>
			<div id="brand" className={twClasses.container}>
				<img src={logoSrc} className={twClasses.logo} />
				<span className={twClasses.title}>Fancydo</span>
			</div>
		</>
	)
}
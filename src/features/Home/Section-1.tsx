import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { ContextMain } from "../../data/context/main"
import { useScroll, useTransform, motion } from "framer-motion"

type Props = {
	onAboutClick: ()=>void
}

const HomeSection1:React.FC<Props> = ({onAboutClick}) => {
	const containerRef = useRef(null)
	const {scrollY} = useScroll()
	const opacity = useTransform(scrollY, [0,800],[0.9,0.4])
	const {theme} = useContext(ContextMain)
	const logoSrc =
		theme.current === "theme-default" || theme.current === "theme-relax"
			? "/logo/logo-white-sm.png"
			: theme.current === "theme-default-invert"
			? "/logo/logo-default-sm.png"
			: "/logo/logo-relax-sm.png"
	const navigate = useNavigate()

	const isThemeInverted = theme.current.includes("invert")

	const twClasses = {
		container: `
			relative w-full min-h-screen flex flex-col space-y-14 items-center justify-center bg-gradient-to-b 
			${
				isThemeInverted
					? "from-primary-main-color to-primary-light-color"
					: "from-primary-main-color to-primary-dark-color"
			}  
			opacity-90
		`,
		logo: `w-auto h-24`,
		heading: `text-lg font-light text-primary-main-contrast`,
		title: `text-4xl font-black text-primary-main-contrast [text-shadow:_2px_2px_5px_rgba(var(--color-primary-main-contrast),30%)]`,
		btnAbout: `w-full px-4 py-2 rounded-md border border-primary-main-contrast/50 text-md text-primary-main-contrast`,
		btnDemo: `
			w-full px-4 py-2 rounded-md bg-gradient-to-br text-md
			${
				isThemeInverted
					? "from-primary-main-contrast to-secondary-dark-color text-primary-main-color"
					: "from-primary-main-color to-danger-dark-color text-primary-main-contrast"
			}
		`,
	}

	return (
		<>
			<motion.div
				id="section-1"
				className={twClasses.container}
				style={{
					opacity: opacity
				}}
				ref={containerRef}
			>
				<img src={logoSrc} className={twClasses.logo} />
				<div>
					<h1 className="flex flex-col items-center space-y-2">
						<span className={twClasses.heading}>Take control of</span>
						<span className={twClasses.heading}>your day with</span>
						<span className={twClasses.title}>Fancydo</span>
					</h1>
					<div id="btn-group" className="pt-8 flex flex-row space-x-2">
						<button className={twClasses.btnAbout} onClick={onAboutClick}>
							About
						</button>
						<button
							className={twClasses.btnDemo}
							onClick={() => navigate("/app")}
						>
							Demo
						</button>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default HomeSection1

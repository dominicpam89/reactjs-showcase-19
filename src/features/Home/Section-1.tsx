import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { useNavigate } from "react-router-dom"

type Props = {
	onAboutClick: ()=>void
}

const HomeSection1:React.FC<Props> = ({onAboutClick}) => {
	const context = useContext(ContextMain)
	const logoSrc =
		(context.theme.current === "theme-default" ||
		context.theme.current === "theme-earth")
			? "/logo/logo-white-sm.png"
			: "/logo/logo-black-sm.png"
	const navigate = useNavigate()

	const twClasses = {
		container: `relative w-full min-h-screen flex flex-col space-y-14 items-center justify-center bg-gradient-to-b from-primary-main-color to-primary-dark-color opacity-90`,
		heading: `text-2xl font-light text-primary-main-contrast`,
		title: `text-5xl font-black text-primary-main-contrast [text-shadow:_2px_2px_5px_rgba(var(--color-primary-main-contrast),30%)]`,
		btnAbout: `w-full px-6 py-3 rounded-md border border-primary-main-contrast/50 text-md text-primary-main-contrast`,
		btnDemo: `w-full px-6 py-3 rounded-md bg-gradient-to-br from-primary-main-color to-danger-main-color text-md text-primary-main-contrast`,
	}

	return (
		<>
			<div id="section-1" className={twClasses.container}>
				<img src={logoSrc} />
				<div>
					<h1 className="flex flex-col items-center space-y-2">
						<span className={twClasses.heading}>Take control of</span>
						<span className={twClasses.heading}>your day with</span>
						<span className={twClasses.title}>Fancydo</span>
					</h1>
					<div id="btn-group" className="pt-8 flex flex-row space-x-2">
						<button className={twClasses.btnAbout} onClick={onAboutClick}>About</button>
						<button
							className={twClasses.btnDemo}
							onClick={() => navigate("/app")}
						>
							Demo
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeSection1

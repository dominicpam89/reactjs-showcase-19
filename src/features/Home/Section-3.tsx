import { useContext } from "react"
import { useHooksMediaQuery } from "../../data/hooks/media-query"
import { ContextMain } from "../../data/context/main"
import { IconContext } from "react-icons"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"

// highlight word
const HW:React.FC<{children:React.ReactNode}> = ({children})=>{
  return <span className="text-info-light-color">
    {children}
  </span>
}

const HomeSection3 = () => {
	const context = useContext(ContextMain)
	const desktopView = useHooksMediaQuery(`(min-width:768px)`)
	context
	desktopView

	const twClasses = {
		container: `w-full px-16 py-24 flex flex-col items-center justify-around space-y-8 bg-gradient-to-t from-primary-main-color to-primary-dark-color`,
		card: `flex flex-col space-y-4 items-center`,
    brand:{
      brandContainer: `flex flex-row space-x-5 items-center justify-center`,
      logo: `h-16 w-auto opacity-80`,
      title: `text-3xl font-extrabold text-primary-main-contrast [text-shadow:_2px_2px_5px_rgba(var(--color-primary-main-contrast),30%)] opacity-80`,
      description: `${context.theme.current==="theme-relax"?"font-medium":"font-thin"} py-2 text-sm text-primary-main-contrast text-justify hyphens-auto break-words leading-6`,
      highlight: `text-danger-main-color`,
    },
		social:{
			container: `w-full flex flex-row space-x-4 justify-around`,
			link: ``,
			icon: {className: `w-auto h-8 text-primary-main-contrast opacity-80`},
		}
	}

	return (
		<>
			<div id="section-3" className={twClasses.container}>
				<div id="card" className={twClasses.card}>
					<div id="brand" className={twClasses.brand.brandContainer}>
						{context.theme.current === "theme-default" || context.theme.current === "theme-earth" ? (
							<img src="/logo/logo-white-sm.png" className={twClasses.brand.logo} />
						) : (
							<img src="/logo/logo-black-sm.png" className={twClasses.brand.logo} />
						)}
						<span className={twClasses.brand.title}>Fancydo</span>
					</div>
					<p className={twClasses.brand.description}>
						Fancydo is Dominic Pam showcase of Front End Stack Technology
						mainly <HW>React</HW>, <HW>React Router</HW>, <HW>Tanstack</HW>, and using Supabase as backend service. As other library for UI
						such as <HW>React Icons</HW>, <HW>Tailwind</HW> and <HW>Framer Motion</HW>
					</p>
				</div>
        <div id="card" className={twClasses.card}>
						<div id="social" className={twClasses.social.container}>
							<a href="#" className={twClasses.social.link}>
								<IconContext.Provider value={twClasses.social.icon}>
									<BsLinkedin />
								</IconContext.Provider>
							</a>
							<a href="#" className={twClasses.social.link}>
								<IconContext.Provider value={twClasses.social.icon}>
									<BsGithub />
								</IconContext.Provider>
							</a>
							<a href="#" className={twClasses.social.link}>
								<IconContext.Provider value={twClasses.social.icon}>
									<BsInstagram />
								</IconContext.Provider>
							</a>
						</div>
        </div>
			</div>
		</>
	)
}

export default HomeSection3

import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"

// Brand Description Component
const HW: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const {theme} = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	return <span className={isThemeInverted?"text-info-dark-contrast":"text-info-light-color"}>{children}</span>
}

export default function Section3_BrandDescription() {
	const {theme} = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	const descriptionFont =
		theme.current === "theme-relax" ? "font-medium" : "font-thin"
	const twClass = `
		py-2 text-xs text-justify hyphens-auto break-words leading-6 text-primary-main-contrast
		${isThemeInverted?"font-normal":descriptionFont} 
	`
	return (
		<p className={twClass}>
			Fancydo is DominicPam's showcase built with <HW>SOLID principle</HW> in
			Front End Stack Technology mainly <HW>React</HW>, <HW>React Router</HW>
			, <HW>Tanstack</HW>, and using Supabase as backend service. UI Library
			that also included are <HW>React Icons</HW>, <HW>Tailwind</HW> and{" "}
			<HW>Framer Motion</HW> for animation
		</p>
	)
}

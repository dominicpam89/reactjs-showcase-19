import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"
import { BsDiscFill } from "react-icons/bs"
import UIReactIcon from "../../../UI/ReactIcon"

const ThemeSelectButton = () => {
	const { theme } = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	return (
		<button
			className={`
					w-full py-4 flex flex-row items-center justify-center space-x-2 transition-all duration-300
					${isThemeInverted ? "text-primary-main-contrast" : "text-info-main-color"}
				`}
		>
			<UIReactIcon icon={<BsDiscFill />} value={{ className: "h-4" }} />
			<span>Theme Select</span>
		</button>
	)
}

export default ThemeSelectButton

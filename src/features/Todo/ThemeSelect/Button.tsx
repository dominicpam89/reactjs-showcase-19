import { useContext, useMemo } from "react"
import { ContextMain } from "../../../data/context/main"
import { BsDiscFill } from "react-icons/bs"
import UIReactIcon from "../../../UI/ReactIcon"
import { motion } from "framer-motion"
import { ThemeOption } from "../ThemeSelect"

type Props = {
	themeOptions: ThemeOption[]
}

const ThemeSelectButton: React.FC<Props> = ({ themeOptions }) => {
	const { theme, themeSelection } = useContext(ContextMain)
	const selectedTheme = useMemo(
		() => themeOptions.find((opt) => opt.theme === theme.current),
		[themeOptions, theme]
	)
	const isThemeInverted = theme.current.includes("invert")
	const btnText = isThemeInverted
		? "text-primary-main-contrast"
		: "text-info-main-color"
	return (
		<button
			className={`
					relative w-full py-4 flex flex-row items-center justify-center space-x-2
					${btnText}
				`}
			onClick={() => themeSelection.toggle()}
		>
			{/* Icon */}
			<motion.span
				initial={{ rotateZ: themeSelection.visible ? 0 : -180 }}
				animate={{ rotateZ: themeSelection.visible ? 180 : 0 }}
				exit={{ rotateZ: themeSelection.visible ? 0 : -180 }}
			>
				<UIReactIcon icon={<BsDiscFill />} value={{ className: "h-4" }} />
			</motion.span>

			{/* Text */}
			<span>{selectedTheme?.text}</span>
		</button>
	)
}

export default ThemeSelectButton

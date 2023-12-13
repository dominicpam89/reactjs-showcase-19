import UIReactIcon from "../ReactIcon"
import { motion, HTMLMotionProps } from "framer-motion"

interface PropsButton extends HTMLMotionProps<"button"> {
	icon: React.ReactNode
	text: string
	colorTwClass?: string
	customClass?: string
}
const UIIconButton: React.FC<PropsButton> = ({
	icon,
	text,
	colorTwClass = "text-info-light-color",
	customClass = "",
	...defaultProps
}) => {
	return (
		<motion.button
			className={`flex space-x-1 items-center ${colorTwClass} ${customClass}`}
			{...defaultProps}
		>
			<UIReactIcon icon={icon} />
			<span>{text}</span>
		</motion.button>
	)
}

export default UIIconButton

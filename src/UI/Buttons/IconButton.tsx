import UIReactIcon from "../ReactIcon"
import { motion } from "framer-motion"

interface PropsButton
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
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
	onClick=()=>{},
	onBlur=()=>{},
	disabled
}) => {
	return (
		<motion.button
			whileHover={{scale:1.05}}
			whileTap={{scale:0.95}}
			className={`flex space-x-1 items-center ${colorTwClass} ${customClass}`}
			onClick={onClick}
			onBlur={onBlur}
			disabled={disabled}
		>
			<UIReactIcon icon={icon} />
			<span>{text}</span>
		</motion.button>
	)
}

export default UIIconButton
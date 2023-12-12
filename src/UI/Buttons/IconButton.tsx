import UIReactIcon from "../ReactIcon"
import { motion } from "framer-motion"

interface PropsButton
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: React.ReactNode
	text: string
	textSize?: "xs" | "sm" | "md" | "lg"
	colorTwClass?: string
	saturation?:
		| "10%"
		| "20%"
		| "30%"
		| "40%"
		| "50%"
		| "60%"
		| "70%"
		| "80%"
		| "90%"
		| "100%"
  customClass?: string
	onClick?: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}
const UIIconButton: React.FC<PropsButton> = ({
	icon,
	text,
	textSize = "xs",
	colorTwClass = "text-info-light-color",
	saturation = "50%",
  customClass = "",
	onClick=()=>{},
}) => {
	return (
		<motion.button
			whileHover={{scale:1.05}}
			whileTap={{scale:0.95}}
			className={`flex space-x-1 items-center text-${textSize} saturate-[${saturation}] ${colorTwClass} ${customClass}`}
			onClick={onClick}
		>
			<UIReactIcon icon={icon} />
			<span>{text}</span>
		</motion.button>
	)
}

export default UIIconButton
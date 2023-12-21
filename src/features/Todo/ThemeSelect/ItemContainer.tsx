import { useContext } from "react"
import { TypePropsChildren } from "../../../data/types/common"
import { ContextMain } from "../../../data/context/main"
import { motion, Variants } from "framer-motion"

type MotionVar = {
	container: Variants
	ul: Variants
}

const motionVar: MotionVar = {
	container: {
		hidden: { height: "0%", transition:{ duration:0.24, delay:0.12} },
		visible: { height: "auto" },
	},
	ul: {
		hidden: { opacity: 0, transition:{ staggerChildren: 0.12} },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.24,
				staggerChildren: 0.12,
			},
		},
	},
}

const ThemeSelectItemContainer: React.FC<TypePropsChildren> = ({
	children,
}) => {
	const isThemeInverted =
		useContext(ContextMain).theme.current.includes("invert")
	return (
		<>
			<motion.div
				id="selection"
				className={`
					absolute z-[1000] w-full top-13 rounded-sm text-sm
					${isThemeInverted ? "bg-primary-main-contrast" : "bg-primary-main-color"}
				`}
				variants={motionVar.container}
				initial="hidden"
				animate="visible"
				exit="hidden"
				transition={{ type: "spring", duration: 0.24 }}
			>
				<motion.ul variants={motionVar.ul} className="leading-8">
					{children}
				</motion.ul>
			</motion.div>
		</>
	)
}

export default ThemeSelectItemContainer

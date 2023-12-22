import { useNavigate } from "react-router-dom"
import { ContextMain } from "../data/context/main"
import { useContext } from "react"
import { motion, Variants } from "framer-motion"

interface MotionVar {
	container: Variants
	heading: Variants
	content: Variants
	button: Variants
}

const motionVar: MotionVar = {
	container: {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	},
	heading: {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	},
	content: {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	},
	button: {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
		tap: { scale: 0.95, transition: { type: "spring", bounce: 0.6 } },
		hover: { scale: 1.05, transition: { type: "spring", bounce: 0.4 } },
	},
}

const UIErrorPage = () => {
	const context = useContext(ContextMain)
	const navigate = useNavigate()
	const twClasses = {
		container: `${context.theme.current} w-full min-h-screen bg-gradient-to-bl from-primary-main-color to-danger-dark-color flex flex-col space-y-3 justify-center items-center p-10`,
		heading: `font-bold text-2xl text-primary-main-contrast`,
		content: `text-md text-primary-main-contrast`,
		button: `w-2/4 px-3 py-1 rounded-md text-sm border border-primary-main-contrast text-primary-main-contrast`,
	}
	return (
		<>
			<motion.div
				id="container"
				className={twClasses.container}
				variants={motionVar.container}
				initial="hidden"
				animate="show"
				exit="hidden"
			>
				<motion.h1
					variants={motionVar.heading}
					className={twClasses.heading}
				>
					Error
				</motion.h1>
				<motion.p
					variants={motionVar.content}
					className={twClasses.content}
				>
					Something went wrong
				</motion.p>
				<motion.button
					variants={motionVar.button}
					whileHover="hover"
					whileTap="tap"
					className={twClasses.button}
					onClick={() => navigate("/app")}
				>
					Back
				</motion.button>
			</motion.div>
		</>
	)
}

export default UIErrorPage

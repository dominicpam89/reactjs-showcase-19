import { TypeModalProps } from "../data/types/Props"
import { createPortal } from "react-dom"
import { useContext } from "react"
import { ContextMain } from "../data/context/main"
import { motion } from "framer-motion"
import { utilsGetPadding as getPadding } from "../data/utils/getPadding"

const modal: any = document.querySelector("#modal")

const UIModal: React.FC<TypeModalProps> = ({
	children,
	centered = false,
	padding = "none",
}) => {
	const context = useContext(ContextMain)
	const paddingVal = getPadding(padding)
	const twClasses = {
		modalContainer: `${context.theme.current} fixed top-0 left-0 z-[500] w-screen h-screen bg-gray-800/80 ${paddingVal}`,
		centeredContent: `flex w-full h-screen justify-center items-center`,
	}
	const centeredContent = (
		<div className={twClasses.centeredContent}>{children}</div>
	)
	return createPortal(
		<motion.div
			id="modal-container"
			className={twClasses.modalContainer}
			data-layer="modal"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={(e) => {
				e
				context.modal.hide()
			}}
		>
			{centered ? centeredContent : children}
			<div></div>
		</motion.div>,
		modal
	)
}

export default UIModal

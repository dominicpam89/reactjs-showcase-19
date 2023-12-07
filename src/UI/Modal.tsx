import { TypePropsChildren } from "../data/types/Props"
import { createPortal } from "react-dom"
import { useContext } from "react"
import { ContextMain } from "../data/context/main"
import { motion } from "framer-motion"

const modal: any = document.querySelector("#modal")

const UIModal: React.FC<TypePropsChildren> = ({ children }) => {
	const context = useContext(ContextMain)
	return createPortal(
		<motion.div
			id="modal-container"
			className="fixed top-0 left-0 z-[500] w-screen h-screen bg-gray-800/30"
			data-layer="modal"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={(e) => {
				e
				context.modal.hide()
			}}
		>
			{children}
		</motion.div>,
		modal
	)
}

export default UIModal

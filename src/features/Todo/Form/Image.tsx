import React, { useContext } from "react"
import { ContextMain } from "../../../data/context/main"
import { motion } from "framer-motion"

type PropsImage = {
	selectedImage: string
	imageId: string
	imageFile: string
}

const TodoImage: React.FC<PropsImage> = ({
	imageFile,
	imageId,
	selectedImage,
}) => {
	const { theme } = useContext(ContextMain)
	const urlBase = import.meta.env.VITE_SUPABASE_STORAGE_URL
	const urlImage = urlBase + theme.current + "/" + imageFile
	const imageName = imageFile.split(".")[0]
	return (
		<>
			<motion.img variants={{
				hidden: {rotateZ:-180},
				visible: {rotateZ:0}
			}} src={urlImage} alt={imageName} className="w-full rounded-full" />
			{selectedImage === imageId && (
				<motion.div
					className="absolute top-0 left-0 w-full h-full rounded-full outline outline-3 outline-offset-2 outline-info-main-color/50 bg-info-main-color/50"
					variants={{
						hidden: {opacity: 0, scale: 0},
						visible: {opacity: 1, scale: "100%"}
					}}
				></motion.div>
			)}
		</>
	)
}

export default TodoImage

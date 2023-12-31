import React from "react"
import { motion } from "framer-motion"

type PropsImage = {
	selectedImage: string
	imageId: string
	imageFile: string
	existedImage: string|undefined
}

const TodoImage: React.FC<PropsImage> = ({
	imageFile,
	imageId,
	selectedImage,
	existedImage
}) => {
	const urlBase = import.meta.env.VITE_SUPABASE_STORAGE_ACTIVITY_URL
	const urlImage = urlBase + imageFile
	const imageName = imageFile.split(".")[0]
	return (
		<>
			<motion.img variants={{
				hidden: {rotateZ:-180},
				visible: {rotateZ:0}
			}} src={urlImage} alt={imageName} className="w-full rounded-full" />
			{selectedImage !== imageId &&
				<div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary-main-color mix-blend-color"></div>
			}
			{selectedImage === imageId && (
				<motion.div
					className="absolute top-0 left-0 w-full h-full rounded-full outline outline-3 outline-offset-2 outline-danger-main-color/50 bg-danger-main-color/50"
					variants={{
						hidden: {opacity: 0, scale: 0},
						visible: {opacity: 1, scale: "100%"}
					}}
				></motion.div>
			)}
			{existedImage && existedImage?.slice(0,3)===imageFile.slice(0,3) && <motion.div
					className="absolute top-0 left-0 w-full h-full rounded-full outline outline-3 outline-offset-2 outline-success-main-color/50 bg-success-main-color/50"
					variants={{
						hidden: {opacity: 0, scale: 0},
						visible: {opacity: 1, scale: "100%"}
					}}
				></motion.div>}
		</>
	)
}

export default TodoImage

import { useHooksGetActivityImages } from "../../../data/hooks/query"
import { LoaderDefault, LoaderError } from "../../../UI/Loader"
import { Variants, motion } from "framer-motion"
import { useState } from "react"
import TodoImage from "./Image"

type Props = {
	inputError: string|undefined
	onImageSelect: (imageName: string) => void
	existedImage: string | undefined
}

type MotionVar = {
	imageListContainer: Variants
	imageContainer: Variants

}

const motionVar:MotionVar= {
	imageListContainer: {
		hidden: {},
		visible: {},
	},
	imageContainer: {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	},
}


const TodoImageList: React.FC<Props> = ({ onImageSelect, inputError, existedImage }) => {
	const [selectedImage, setSelectedImage] = useState("")
	const { data, error, isError, isLoading } = useHooksGetActivityImages("xs")
	if (data && !isLoading) {
		return (
			<div className="flex flex-col space-y-2">
				<h4 className={`text-sm ${inputError?"text-danger-main-color/90":"text-primary-main-color/50"}`}>Select image</h4>
				<motion.div
					id="imageList-container"
					variants={motionVar.imageListContainer}
					initial="hidden"
					animate="visible"
					exit="hidden"
					transition={{ staggerChildren: 0.1 }}
				className="grid grid-cols-4 gap-x-2 gap-y-2"
				>
					{data.map((image) => (
						<motion.div
							id="image-container"
							className="relative"
							key={image.id}
							variants={motionVar.imageContainer}
							whileTap={{ rotateX: 180 }}
							onClick={() => {
								onImageSelect(image.name)
								setSelectedImage(image.id)
							}}
						>
							<TodoImage
								imageFile={image.name}
								imageId={image.id}
								selectedImage={selectedImage}
								existedImage={existedImage}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		)
	}
	if (isLoading)
		return (
			<div className="w-full flex justify-center">
				<LoaderDefault opacity="opacity-80" />
			</div>
		)
	else if (isError) return <LoaderError error={error} />
}

export default TodoImageList

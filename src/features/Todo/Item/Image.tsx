import { utilsGetImage as getImage, TypeImageSize } from "../../../data/utils/todo"

type PropsImage = {
	image: string
	size?: TypeImageSize
}
const TodoItemImage: React.FC<PropsImage> = ({ image, size = "sm" }) => {
	const imageName = getImage(image, size)
	return (
		<div id="image-container" className="relative w-[80px] h-[80px]">
			<img
				src={import.meta.env.VITE_SUPABASE_STORAGE_ACTIVITY_URL + imageName}
				alt={image.replace(".png", "")}
				className=""
			/>
			<div
				id="image-overlay"
				className="absolute top-0 left-0 w-full h-full rounded-full bg-primary-main-color mix-blend-color"
			></div>
		</div>
	)
}

export default TodoItemImage
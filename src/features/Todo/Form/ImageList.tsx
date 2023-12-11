import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"
import { useHooksGetImages } from "../../../data/hooks/query"
import TodoImage from "./Image"
import { LoaderDefault } from "../../../UI/Loader"

type Props = {
	onImageSelect: (imageName: string) => void
}

const TodoImageList: React.FC<Props> = ({ onImageSelect }) => {
	const { imagesDefault, imagesEarth, imagesRelax } = useHooksGetImages()
	const {
		theme: { current: theme },
	} = useContext(ContextMain)
	let usedHook =
		theme === "theme-default"
			? imagesDefault
			: theme === "theme-earth"
			? imagesEarth
			: imagesRelax
	const { data, error, isError, isLoading } = usedHook
	if (data && !isLoading) {
		return (
			<div className="flex flex-col space-y-2">
				<h4 className="text-sm text-primary-main-color/50">Select image</h4>
				<div className="grid grid-cols-5 gap-x-2 gap-y-2">
					{data.map((image) => (
						<TodoImage
							key={image.id}
							imageFile={image.name}
							theme={theme}
							className="w-[40px]"
							onClick={() => onImageSelect(image.name)}
						/>
					))}
				</div>
			</div>
		)
	}
	if (isLoading)
		return (
			<div className="w-full flex justify-center">
				<LoaderDefault />
			</div>
		)
	else if (isError) return <p>{error.message}</p>
}

export default TodoImageList

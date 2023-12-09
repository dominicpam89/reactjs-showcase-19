import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"
import TodoImage from "./Image"
import { useHooksGetImages } from "../../../data/hooks/query"

const TodoImageList = () => {
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
	if (data && !isLoading)
		return data.map((image) => (
			<TodoImage key={image.id} imageFile={image.name} theme={theme} />
		))
	else if (isLoading) {
	} else if (isError) {
		error
	}
}

export default TodoImageList
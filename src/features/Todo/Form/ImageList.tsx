import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"
import TodoImage from "./Image"
import { useHooksGetImages } from "../../../data/hooks/query"

type Props = {
	onImageSelect: (imageName:string)=>void,
}

const TodoImageList:React.FC<Props> = ({onImageSelect}) => {
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
	if (data && !isLoading){
		return <div  className="grid grid-cols-5 gap-x-2 gap-y-2">
			{data.map((image) => (
					<TodoImage key={image.id} imageFile={image.name} theme={theme} className="w-[24px]" onClick={()=>onImageSelect(image.name)} />
			))}
		</div>
	}
	else if (isLoading) {
		return <p>loading...</p>
	} else if (isError) {
		return <p>{error.message}</p>
	}
}

export default TodoImageList
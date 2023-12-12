import { TypeTodo } from "../../data/types/query"
import { useSearchParams } from "react-router-dom"
import { BsFillTrash3Fill, BsPencilFill, BsEmojiDizzyFill, BsCalendarCheckFill } from "react-icons/bs"
import UIIconButton from "../../UI/Buttons/IconButton"

type PropsImage = {
  image: string
}
const Image:React.FC<PropsImage> = ({image})=>{
	return (
		<div id="image-container" className="w-full h-full">
			<img
				src={import.meta.env.VITE_SUPABASE_STORAGE_ACTIVITY_URL + image}
				alt={image.replace(".png", "")}
				className=""
			/>
		</div>
	)
}


type PropsDetail = {
  tag: string,
  details: string
}
const Detail:React.FC<PropsDetail> = ({tag, details})=>{
  return (
		<div id="text-container" className="flex flex-col space-y-1">
			<h2 className="text-md font-extrabold">{tag}</h2>
			<p className="text-xs font-extralight break-words hyphens-auto text-justify leading-5">
				{details}
			</p>
		</div>
  )
}



const Actions = ()=>{
  return (
		<>
			<UIIconButton
				icon={<BsFillTrash3Fill />}
				text="Delete"
				colorTwClass="text-danger-light-color"
				customClass="saturate-[40%] text-xxs"
        onClick={() => console.log("Delete is clicked")}
				
			/>
			<UIIconButton
				icon={<BsEmojiDizzyFill />}
				text="Failed"
				colorTwClass="text-warning-light-color"
				customClass="saturate-[40%] text-xxs"
        onClick={() => console.log("Failed is clicked")}
			/>
			<UIIconButton
				icon={<BsCalendarCheckFill />}
				text="Completed"
				colorTwClass="text-success-light-color"
				customClass="saturate-[40%] text-xxs"
        onClick={() => console.log("Completed is clicked")}
			/>
			<UIIconButton
				icon={<BsPencilFill />}
				text={"Edit"}
				customClass="text-xxs"
				onClick={()=>console.log("Edit clicked")}
			/>
		</>
  )
}


const TodoItem:React.FC<{todo:TypeTodo}> = ({todo}) => {
  const [searchParams,_] = useSearchParams()
  const mode = searchParams.get("mode")
  if(mode!==todo.status) return
  return (
		<>
			<div
				id="container"
				className="w-full p-6 flex flex-col space-y-8 bg-primary-main-color/30 text-primary-main-contrast"
			>
        <div id="row-1" className="grid grid-cols-[80px_auto] gap-x-3 items-center">
          <Image image={todo.image} />
          <Detail tag={todo.tag} details={todo.details} />
        </div>
        <div id="row-2" className="flex justify-between">
            <Actions />
        </div>
			</div>
		</>
  )
}
 
export default TodoItem;
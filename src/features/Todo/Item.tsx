import { TypeTodo } from "../../data/types/query"
import { useSearchParams } from "react-router-dom"
import {
	BsFillTrash3Fill,
	BsPencilFill,
	BsEmojiDizzyFill,
	BsCalendarCheckFill,
} from "react-icons/bs"
import {
	utilsTodo_calcDueDate as calcDueDate,
	utilsGetImage as getImage,
} from "../../data/utils/todo"
import UIIconButton from "../../UI/Buttons/IconButton"
import { useHooksDeleteTodo } from "../../data/hooks/query"
import { LoaderError } from "../../UI/Loader"
import UIDeleteConfirmation from "../../UI/Modal/DeleteConfirmation"
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { AnimatePresence } from "framer-motion"

type PropsImage = {
	image: string
	size?: "default" | "sm" | "xs"
}
const Image: React.FC<PropsImage> = ({ image, size = "sm" }) => {
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

type PropsDetail = {
	tag: string
	details: string
	date: any
}

const Detail: React.FC<PropsDetail> = ({ tag, details, date }) => {
	const [searchParams, _] = useSearchParams()
	const mode = searchParams.get("mode")
	const { text } = calcDueDate(date)
	let deadlineText = ""
	if (mode === "active") deadlineText = "Must be done " + text
	else if (mode === "completed") deadlineText = "Completed"
	else if (mode === "failed") deadlineText = "Failed"
	return (
		<div id="text-container" className="flex flex-col space-y-1">
			<h2 className="text-md font-extrabold">{tag}</h2>
			<p
				id="details"
				className="text-xs font-extralight break-words hyphens-auto text-justify leading-5"
			>
				{details}
			</p>
			<h3 id="deadline" className="text-xxs text-info-main-color/60">
				{deadlineText}
			</h3>
		</div>
	)
}

type PropsActions = {
	todo: TypeTodo
}

const Actions:React.FC<PropsActions> = ({todo}) => {
	const {modalDeleteConfirmation:modalDelete} = useContext(ContextMain)
	const [searchParams, _] = useSearchParams()
	const {mutate:deleteTodo, isPending:isDeletePending} = useHooksDeleteTodo()
	const mode = searchParams.get("mode")
	const isTakingAction = isDeletePending
	const btnDelete = (
		<UIIconButton
			key="btnDelete"
			icon={<BsFillTrash3Fill />}
			text="Delete"
			colorTwClass="text-danger-light-color"
			customClass="saturate-[40%] text-xxs"
			onClick={()=>modalDelete.show()}
			disabled={isTakingAction}
			
		/>
	)
	const btnFailed = (
		<UIIconButton
			key="btnFailed"
			icon={<BsEmojiDizzyFill />}
			text="Failed"
			colorTwClass="text-warning-light-color"
			customClass="saturate-[40%] text-xxs"
			onClick={() => console.log("Failed is clicked")}
			disabled={isTakingAction}
		/>
	)
	const btnCompleted = (
		<UIIconButton
			key="btnCompleted"
			icon={<BsCalendarCheckFill />}
			text="Completed"
			colorTwClass="text-success-light-color"
			customClass="saturate-[40%] text-xxs"
			onClick={() => console.log("Completed is clicked")}
			disabled={isTakingAction}
		/>
	)
	const btnEdit = (
		<UIIconButton
			key="btnEdit"
			icon={<BsPencilFill />}
			text={"Edit"}
			customClass="text-xxs"
			onClick={() => console.log("Edit clicked")}
			disabled={isTakingAction}
		/>
	)
	let content = [btnDelete, btnFailed, btnCompleted, btnEdit]
	content =
		mode === "completed"
			? [btnDelete]
			: mode === "failed"
			? [btnDelete, btnEdit]
			: [btnDelete, btnFailed, btnCompleted, btnEdit]
	return <>
		<AnimatePresence>{modalDelete.visibility && <UIDeleteConfirmation onDelete={()=>deleteTodo(todo)} />}</AnimatePresence>
		{content.map((item) => item)}
	</>
}

const TodoItem: React.FC<{ todo: TypeTodo }> = ({ todo }) => {
	const actionDelete = useHooksDeleteTodo()
	const errors = {
		delete: <LoaderError error={actionDelete.error} justifyContent="justify-center" alignItems="items-center" />
	}
	return (
		<>
			<div
				id="container"
				className="w-full p-6 flex flex-col space-y-8 bg-primary-main-color/30 text-primary-main-contrast"
			>
				<div
					id="row-1"
					className="grid grid-cols-[80px_auto] gap-x-3 items-start"
				>
					<Image image={todo.image} />
					<Detail
						tag={todo.tag}
						details={todo.details}
						date={todo.dateFinished}
					/>
				</div>
				{actionDelete.isError && errors.delete}
				<div id="row-2" className="flex justify-around">
					<Actions todo={todo} />
				</div>
			</div>
		</>
	)
}

export default TodoItem

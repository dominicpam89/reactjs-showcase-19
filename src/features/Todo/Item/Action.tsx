import { UseMutationResult } from "@tanstack/react-query"
import { TypeQueryUpdateTodo, TypeTodo } from "../../../data/types/query"
import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"
import { useSearchParams } from "react-router-dom"
import UIIconButton from "../../../UI/Buttons/IconButton"
import {
	BsCalendarCheckFill,
	BsEmojiDizzyFill,
	BsFillTrash3Fill,
	BsPencilFill,
} from "react-icons/bs"
import { AnimatePresence } from "framer-motion"
import UIDeleteConfirmation from "../../../UI/Modal/DeleteConfirmation"
import UIUpdateConfirmation from "../../../UI/Modal/UpdateConfirmation"

type PropsActions = {
	todo: TypeTodo
	todoDelete: UseMutationResult<void, Error, TypeTodo, void>
	todoUpdate: UseMutationResult<void, Error, TypeQueryUpdateTodo, void>
}

const TodoItemAction: React.FC<PropsActions> = ({ todo, todoDelete, todoUpdate }) => {
	// Modal
	const { modalConfirmation } = useContext(ContextMain)
	const {delete:modalDelete, failed:modalFailed, completed:modalCompleted} = modalConfirmation

	// What to display based on mode==="active"||"completed"||"failed"
	const [searchParams, _] = useSearchParams()
	const mode = searchParams.get("mode")

	// status of query
	const isTakingAction = todoDelete.isPending || todoUpdate.isPending

	const btnDelete = (
		<UIIconButton
			key="btnDelete"
			icon={<BsFillTrash3Fill />}
			text="Delete"
			colorTwClass="text-danger-light-color"
			customClass="saturate-[40%] text-xxs"
			onClick={() => modalDelete.show()}
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
			onClick={modalFailed.show}
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
			onClick={modalCompleted.show}
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
	return (
		<>
			{/* Modal Confirmation of any Actions */}
			<AnimatePresence>
				{modalDelete.visibility && (
					<UIDeleteConfirmation
						key="delete-confirmation"
						onDelete={() => todoDelete.mutate(todo)}
					/>
				)}
				{modalFailed.visibility && <UIUpdateConfirmation 
					key="failed-confirmation"
					modalHide={()=>modalFailed.hide()}
					onUpdate={()=>todoUpdate.mutate({status:"failed", todoId:todo.id})}
					title="Set todo activity as failed?"
				/>}
				{modalCompleted.visibility && <UIUpdateConfirmation 
					key="completed confirmation"
					modalHide={()=>modalCompleted.hide()}
					onUpdate={()=>todoUpdate.mutate({status:"completed", todoId:todo.id})}
					title="Set todo activity as completed?"
				/>}
			</AnimatePresence>
			{/* Main Content: Action Buttons */}
			{content.map((item) => item)}
		</>
	)
}

export default TodoItemAction

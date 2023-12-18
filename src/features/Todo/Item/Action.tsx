import { UseMutationResult } from "@tanstack/react-query"
import { TypeQueryUpdateStatusTodo, TypeTodo, TypeTodoUpdateArg } from "../../../data/types/query"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import UIIconButton from "../../../UI/Buttons/IconButton"
import {
	BsCalendarCheckFill,
	BsEmojiDizzyFill,
	BsFillTrash3Fill,
	BsPencilFill,
} from "react-icons/bs"
import { AnimatePresence } from "framer-motion"
import TodoForm from "../Form"
import UIDeleteConfirmation from "../../../UI/Modal/DeleteConfirmation"
import UIUpdateConfirmation from "../../../UI/Modal/UpdateConfirmation"

type PropsActions = {
	todo: TypeTodo
	todoDelete: UseMutationResult<void, Error, TypeTodo, void>
	todoUpdate: UseMutationResult<void, Error, TypeTodoUpdateArg, void>
	todoUpdateStatus: UseMutationResult<void, Error, TypeQueryUpdateStatusTodo, void>
}

const TodoItemAction: React.FC<PropsActions> = ({ todo, todoDelete, todoUpdate, todoUpdateStatus }) => {
	// Modal
	const [deleteModal, setDeleteModal] = useState(false)
	const [failedModal, setFailedModal] = useState(false)
	const [completedModal, setCompletedModal] = useState(false)
	const [formModal, setFormModal] = useState(false)

	// What to display based on mode==="active"||"completed"||"failed"
	const [searchParams, _] = useSearchParams()
	const mode = searchParams.get("mode")

	// status of query
	const isTakingAction = todoDelete.isPending || todoUpdateStatus.isPending || todoUpdate.isPending

	const btnDelete = (
		<UIIconButton
			key="btnDelete"
			icon={<BsFillTrash3Fill />}
			text="Delete"
			colorTwClass="text-danger-light-color"
			customClass="saturate-[40%] text-xxs"
			onClick={() => {
				setDeleteModal(true)
			}}
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
			onClick={()=>{
				setFailedModal(true)
			}}
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
			onClick={() => {
				setCompletedModal(true)
			}}
			disabled={isTakingAction}
		/>
	)
	const btnEdit = (
		<UIIconButton
			key="btnEdit"
			icon={<BsPencilFill />}
			text={"Edit"}
			customClass="text-xxs"
			onClick={()=>{
				setFormModal(true)
			}}
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
				{deleteModal && (
					<UIDeleteConfirmation
						key="delete-modal"
						hideModal={() => setDeleteModal(false)}
						onDelete={() => todoDelete.mutate(todo)}
					/>
				)}
				{failedModal && <UIUpdateConfirmation
					key="failed-modal"
					modalHide={()=>setFailedModal(false)}
					onUpdate={()=> todoUpdateStatus.mutate({status:"failed",todoId:todo.id})}
				/>}
				{completedModal && <UIUpdateConfirmation 
					key="completed-modal"
					modalHide={()=>setCompletedModal(false)}
					onUpdate={()=>todoUpdateStatus.mutate({status:"completed",todoId:todo.id})}
				/>}
					{formModal && (
						<TodoForm key="update-modal" todo={todo} todoUpdate={todoUpdate} onClose={()=>setFormModal(false)} />
					)}
			</AnimatePresence>
			{/* Main Content: Action Buttons */}
			{content.map((item) => item)}
		</>
	)
}

export default TodoItemAction

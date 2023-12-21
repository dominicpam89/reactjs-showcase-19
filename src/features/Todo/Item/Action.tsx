import { UseMutationResult } from "@tanstack/react-query"
import { TypeQueryUpdateStatusTodo, TypeTodo, TypeTodoUpdateArg } from "../../../data/types/query"
import { useContext, useState } from "react"
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
import { ContextMain } from "../../../data/context/main"

type PropsActions = {
	todo: TypeTodo
	todoDelete: UseMutationResult<void, Error, TypeTodo, void>
	todoUpdate: UseMutationResult<void, Error, TypeTodoUpdateArg, void>
	todoUpdateStatus: UseMutationResult<void, Error, TypeQueryUpdateStatusTodo, void>
}

const TodoItemAction: React.FC<PropsActions> = ({ todo, todoDelete, todoUpdate, todoUpdateStatus }) => {
	// theme control
	const {theme} = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")

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
			colorTwClass={isThemeInverted?"text-danger-dark-contrast/70":"text-danger-light-color"}
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
			colorTwClass={isThemeInverted?"text-warning-dark-contrast/70":"text-warning-light-color"}
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
			colorTwClass={isThemeInverted?"text-success-dark-contrast/70":"text-success-light-color"}
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
			colorTwClass={isThemeInverted?"text-primary-main-contrast/70":"text-primary-main-contrast"}
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

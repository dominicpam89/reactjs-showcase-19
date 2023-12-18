import { UseMutationResult } from "@tanstack/react-query"
import { TypeTodo } from "../../../data/types/query"
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

type PropsActions = {
	todo: TypeTodo
	todoDelete: UseMutationResult<void, Error, TypeTodo, void>
}

const TodoItemAction: React.FC<PropsActions> = ({ todo, todoDelete }) => {
	const { modalDeleteConfirmation: modalDelete } = useContext(ContextMain)
	const [searchParams, _] = useSearchParams()
	const mode = searchParams.get("mode")
	const isTakingAction = todoDelete.isPending
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
	return (
		<>
			<AnimatePresence>
				{modalDelete.visibility && (
					<UIDeleteConfirmation onDelete={() => todoDelete.mutate(todo)} />
				)}
			</AnimatePresence>
			{content.map((item) => item)}
		</>
	)
}

export default TodoItemAction

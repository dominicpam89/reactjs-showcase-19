import { TypeTodo } from "../../data/types/query"
import { useHooksDeleteTodo, useHooksUpdateStatusTodo, useHooksUpdateTodo } from "../../data/hooks/query"
import { LoaderDefault, LoaderError } from "../../UI/Loader"
import TodoItemAction from "./Item/Action"
import TodoItemImage from "./Item/Image"
import TodoItemDetail from "./Item/Detail"
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"

const TodoItem: React.FC<{ todo: TypeTodo }> = ({ todo }) => {
	const {theme} = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	const todoDelete = useHooksDeleteTodo()
	const todoUpdate = useHooksUpdateTodo()
	const todoUpdateStatus = useHooksUpdateStatusTodo()
	const isTakingAction = todoDelete.isPending || todoUpdate.isPending || todoUpdateStatus.isPending
	const errors = {
		delete: (
			<LoaderError
				error={todoDelete.error}
				justifyContent="justify-center"
				alignItems="items-center"
			/>
		),
		update: (
			<LoaderError
				error={todoUpdate.error}
				justifyContent="justify-center"
				alignItems="items-center"
			/>
		),
		updateStatus: (
			<LoaderError
				error={todoUpdateStatus.error}
				justifyContent="justify-center"
				alignItems="items-center"
			/>
		),
	}
	return (
		<>
			<div
				id={`container ${todo.id}`}
				className={`relative w-full p-6 flex flex-col space-y-8 
				${
					isTakingAction ? "opacity-30 pointer-events-none" : ""
				}
				${isThemeInverted?"bg-primary-light-contrast/10 text-primary-main-color":"bg-primary-main-color/30 text-primary-main-contrast"}
				`}
			>
				{todoDelete.isError && errors.delete}
				{todoUpdate.isError && errors.update}
				{todoUpdateStatus.isError && errors.updateStatus}
				{isTakingAction && (
					<div className="absolute inset-0 w-full flex justify-center">
						<LoaderDefault scene="dark" />
					</div>
				)}
				<div
					id="row-1"
					className="grid grid-cols-[80px_auto] gap-x-3 items-start"
				>
					<TodoItemImage image={todo.image} />
					<TodoItemDetail
						tag={todo.tag}
						details={todo.details}
						date={todo.dateFinished}
					/>
				</div>
				<div id="row-2" className="flex justify-around">
					<TodoItemAction
						todo={todo}
						todoDelete={todoDelete}
						todoUpdate={todoUpdate}
						todoUpdateStatus={todoUpdateStatus}
					/>
				</div>
			</div>
		</>
	)
}

export default TodoItem

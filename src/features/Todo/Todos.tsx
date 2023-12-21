import { useSearchParams } from "react-router-dom"
import { useHooksGetTodos } from "../../data/hooks/query"
import TodoItem from "./Todos/Item"
import { LoaderDefault, LoaderError } from "../../UI/Loader"

const TodoTodos = () => {
	const [searchParam] = useSearchParams()
	const mode = searchParam.get("mode")
	const { data, error, isError, isLoading } = useHooksGetTodos()
	let content:any = null
	if (!isLoading && data){
		const filteredData = data.filter(todo=>todo.status===mode)
		if (filteredData.length === 0 || !filteredData)
			content = <p className="text-primary-main-contrast/80 text-center text-sm">No activity in this category!</p>
		else 
			content = filteredData.map((todo) => {
				return <TodoItem key={todo.id} todo={todo} />
			})
	}
	else if (isError)
		content =  (
			<LoaderError
				error={error}
				headerClass="text-danger-light-color"
				contentClass="text-danger-light-color"
				alignItems="items-center"
			/>
		)
	else if (isLoading)
		content = (
			<div className="w-full py-8 flex justify-center">
				<LoaderDefault scene="dark" />
			</div>
		)
	return content
}

export default TodoTodos
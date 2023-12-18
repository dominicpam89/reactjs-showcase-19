import { useSearchParams } from "react-router-dom"
import { utilsTodo_calcDueDate as calcDueDate } from "../../../data/utils/todo"

type PropsDetail = {
	tag: string
	details: string
	date: any
}

const TodoItemDetail: React.FC<PropsDetail> = ({ tag, details, date }) => {
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

export default TodoItemDetail
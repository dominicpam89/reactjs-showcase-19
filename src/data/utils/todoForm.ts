import { TypeTodo } from "../types/query"

export type TypeTodoFormValues = {
  tag: string
	details: string
	dateFinished: string
	image: string
}

export const getFormDate = (date:Date)=>{
	const dateVal = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
	}
	return `${dateVal.year}-${dateVal.month}-${dateVal.date}`	
}

export const utilsTodoFormDefaultValues: TypeTodoFormValues = {
	tag: "",
	details: "",
	dateFinished: getFormDate(new Date()),
	image: "",
}

export const utilsGetTodoFormDefaultValuesEdit: (todo:TypeTodo)=>TypeTodoFormValues = (todo)=>{
	return {
		tag: todo.tag,
		details: todo.details,
		dateFinished: getFormDate(new Date(todo.dateFinished)),
		image: todo.image
	}
}

export const utilsGetInputTwClassesColor = (error: string|undefined) => {
	const inputClass = error
		? `text-danger-main-color border-danger-main-color/50 focus:border-danger-main-color/50`
		: `text-primary-main-color border-primary-main-color/50 focus:border-primary-main-color/50`
	const labelClass = error
		? `text-danger-main-color peer-focus:text-danger-main-color`
		: `text-primary-main-color/50 peer-focus:text-primary-main-color`
	return { inputClass, labelClass }
} 
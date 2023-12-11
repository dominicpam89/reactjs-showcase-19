export type TypeTodoFormDefaultValues = {
  tag: string
	details: string
	dateFinished: string
	image: string
}

const now = new Date()
	const dateVal = {
		year: now.getFullYear(),
		month: now.getMonth()+1,
		date: now.getDate(),
	}
const formattedDate = `${dateVal.year}-${dateVal.month}-${dateVal.date}`

export const utilsTodoFormDefaultValues:TypeTodoFormDefaultValues = {
  tag: "",
  details: "",
  dateFinished: formattedDate,
  image: "",
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
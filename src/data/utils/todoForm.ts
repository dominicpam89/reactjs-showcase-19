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
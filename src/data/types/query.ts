export type TypeTodo = {
	image: string
	information: {
		todo: string
		date: Date
	}
	status: "active" | "completed" | "failed"
}
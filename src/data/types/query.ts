export type TypeTodo = {
	id: number
	created_at: Date
	image: string
	tag:string
	details: string
	dateFinished: Date
	status: "active" | "completed" | "failed"
}

export type TypeQueryUpdateTodo = {
  todoId: number,
  status: "active"|"failed"|"completed"
}
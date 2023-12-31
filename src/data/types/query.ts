import { TypeTodoFormValues } from "../utils/todoForm"

export type TypeTodo = {
	id: number
	created_at: Date
	image: string
	tag:string
	details: string
	dateFinished: Date
	status: "active" | "completed" | "failed"
}

export type TypeQueryUpdateStatusTodo = {
  todoId: number,
  status: "active"|"failed"|"completed"
}

export type TypeTodoUpdateArg = {
	data: TypeTodoFormValues
	todoId: number
}
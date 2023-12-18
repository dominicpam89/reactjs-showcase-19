import { supabase } from "./supabase"
import { TypeTodo, TypeQueryUpdateStatusTodo } from "../types/query"
import { TypeTodoFormValues, getFormDate } from "../utils/todoForm"

export const getTodos = async ()=>{
  const { data, error } = await supabase
    .from('todos')
    .select('*')
  if(error) throw new Error("Couldn't get todos from database")
  const todos: TypeTodo[] = data
  return todos
}

export const addTodo = async({tag,dateFinished,details,image}:TypeTodoFormValues)=>{
  const { error, data } = await supabase
		.from("todos")
		.insert({
			tag,
			dateFinished: getFormDate(new Date(dateFinished)),
			details,
			image,
			status: "active",
		})
  if(error) throw new Error("500 Internal Error. Couldn't add new item!")
  return data
}

export const deleteTodo = async(todoId:number)=>{
  const { error } = await supabase
  .from('todos')
  .delete()
  .eq('id', todoId)
  if(error) throw new Error("Couldn't delete this item!")
}

export const updateStatusTodo = async({todoId, status}:TypeQueryUpdateStatusTodo)=>{
  const { error } = await supabase
  .from('todos')
  .update({ status })
  .eq('id', todoId)
  if(error) throw new Error("Couldn't update this item's status!")
}

export const updateTodo = async(todo:TypeTodoFormValues, todoId:number)=>{
  const { error } = await supabase
		.from("todos")
		.update({
			tag: todo.tag,
			details: todo.details,
			dateFinished: todo.dateFinished,
			image: todo.image,
		})
		.eq("id", todoId)
  if(error) throw new Error("Couldn't update this item!")
}
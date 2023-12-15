import { supabase } from "./supabase"
import { TypeTodo } from "../types/query"


export const getTodos = async ()=>{
  const { data, error } = await supabase
    .from('todos')
    .select('*')
  if(error) throw new Error("Couldn't get todos from database")
  const todos: TypeTodo[] = data
  return todos
}


export const addTodo = async()=>{
  
}

export const deleteTodo = async(todoId:number)=>{
  const { error } = await supabase
  .from('todos')
  .delete()
  .eq('id', todoId)
  if(error) throw new Error("Couldn't delete this item!")
}
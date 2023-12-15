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
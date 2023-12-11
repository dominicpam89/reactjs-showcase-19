import { supabase } from "./supabase"

export const getTodos = async ()=>{
  const { data: todos, error } = await supabase
    .from('todos')
    .select('*')
  if(error) throw new Error("Couldn't get todos from database")
  return todos
}
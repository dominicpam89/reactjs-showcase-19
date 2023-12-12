import { useQuery } from "@tanstack/react-query"
import { getActivityImages } from "../services/supabase-storage"
import { getTodos } from "../services/todos"

import { TypeImageSize } from "../services/supabase-storage"
export const useHooksGetActivityImages = (size:TypeImageSize)=>{
	const images = useQuery({
		queryKey: ["activity-images",size],
		queryFn: ()=>getActivityImages(size)
	})
	return images
}

export const useHooksGetTodos = ()=>{
	const todos = useQuery({
		queryKey: ["todos"],
		queryFn: getTodos
	})
	return todos
}
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { TypeTodo } from "../types/query"
import { TypeTodoFormValues } from "../utils/todoForm"
import { getActivityImages } from "../services/supabase-storage"
import { getTodos, addTodo, deleteTodo } from "../services/todos"
import { toast } from "react-hot-toast"
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

export const useHooksAddTodo = ()=>{
	const queryClient = useQueryClient()
	const todoAdd = useMutation({
		mutationFn: (todo:TypeTodoFormValues)=>addTodo(todo),
		onMutate: (data)=>{
			toast.loading(`Adding ${data.tag} to database`,{id:"loading"})
		},
		onError: (error)=>{
			toast.dismiss("loading")
			toast.error(error.message)
		},
		onSuccess:(_, val)=>{
			toast.dismiss("loading")
			toast.success(`Successfullly added ${val.tag} into database!`)
			queryClient.invalidateQueries({queryKey:["todos"]})
		}
	})
	return todoAdd
}

export const useHooksDeleteTodo = ()=>{
	const queryClient = useQueryClient()
	const todoDelete = useMutation({
		mutationFn: (todo:TypeTodo)=>deleteTodo(todo.id),
		onMutate: (data)=>{
			toast.loading(`Delete ${data.tag} from database`,{id:"loading"})
		},
		onError: (error)=>{
			toast.dismiss("loading")
			toast.error(error.message)
		},
		onSuccess: (_,val)=>{
			toast.dismiss("loading")
			toast.success(`Successfullly deleted ${val.tag} from database!`)
			queryClient.invalidateQueries({queryKey:["todos"]})
		}
	})
	return todoDelete
}
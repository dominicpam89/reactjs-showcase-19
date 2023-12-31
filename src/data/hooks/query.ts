import { TypeTodoFormValues } from './../utils/todoForm';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { TypeTodo, TypeQueryUpdateStatusTodo, TypeTodoUpdateArg } from "../types/query"
import { getActivityImages } from "../services/supabase-storage"
import { getTodos, addTodo, deleteTodo, updateStatusTodo, updateTodo } from "../services/todos"
import { toast } from "react-hot-toast"
import { TypeImageSize } from "../services/supabase-storage"
import { useContext } from "react"
import { ContextMain } from "../context/main"

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
	const {modalForm} = useContext(ContextMain)
	const queryClient = useQueryClient()
	const todoAdd = useMutation({
		mutationFn: (todo:TypeTodoFormValues)=>addTodo(todo),
		onMutate: (data)=>{
			toast.loading(`Adding ${data.tag}`,{id:"loading"})
		},
		onError: (error)=>{
			toast.dismiss("loading")
			toast.error(error.message)
		},
		onSuccess:async (_,val)=>{
			toast.dismiss("loading")
			await queryClient.invalidateQueries({queryKey:["todos"]})
			toast.success(`Successfullly added ${val.tag}!`)
			modalForm.hide()
		}
	})
	return todoAdd
}

export const useHooksDeleteTodo = ()=>{
	const queryClient = useQueryClient()
	const todoDelete = useMutation({
		mutationFn: (todo:TypeTodo)=>deleteTodo(todo.id),
		onMutate: (data)=>{
			toast.loading(`Deleting ${data.tag}`,{id:"loading"})
		},
		onError: (error)=>{
			toast.dismiss("loading")
			toast.error(error.message)
		},
		onSuccess: (_,val)=>{
			toast.dismiss("loading")
			toast.success(`Successfullly deleted ${val.tag}!`)
			queryClient.invalidateQueries({queryKey:["todos"]})
		}
	})
	return todoDelete
}

export const useHooksUpdateStatusTodo = ()=>{
	const queryClient = useQueryClient()
	const todoUpdate = useMutation({
		mutationFn: (data:TypeQueryUpdateStatusTodo)=>updateStatusTodo(data),
		onMutate: ()=>{
			toast.loading(`Updating...`, {id:"loading"})
		},
		onError: (error)=>{
			toast.dismiss("loading")
			toast.error(error.message)
		},
		onSuccess: ()=>{
			toast.dismiss("loading")
			toast.success(`Successfullly updated!`)
			queryClient.invalidateQueries({queryKey:["todos"]})
		}
	})
	return todoUpdate
}


export const useHooksUpdateTodo = ()=>{
	const queryClient = useQueryClient()
	const todoUpdate = useMutation({
		mutationFn: ({data, todoId}:TypeTodoUpdateArg)=>updateTodo(data,todoId),
		onMutate: ()=>{
			toast.loading(`Updating...`, {id:"loading"})
		},
		onError: (error)=>{
			toast.dismiss("loading")
			toast.error(error.message)
		},
		onSuccess: ()=>{
			toast.dismiss("loading")
			toast.success(`Successfullly updated!`)
			queryClient.invalidateQueries({queryKey:["todos"]})
		}
	})
	return todoUpdate
}
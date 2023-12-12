import { useQuery } from "@tanstack/react-query"
import { getImagesThemeDefault, getImagesThemeEarth, getImagesThemeRelax, getActivityImages } from "../services/supabase-storage"
import { getTodos } from "../services/todos"
import { useContext } from "react"
import { ContextMain } from "../context/main"

export const useHooksGetImages = () => {
	const imagesDefault = useQuery({
		queryKey: ["activity-images", "theme-default"],
		queryFn: getImagesThemeDefault,
	})

	const imagesEarth = useQuery({
		queryKey: ["activity-images", "theme-earth"],
		queryFn: getImagesThemeEarth,
	})

	const imagesRelax = useQuery({
		queryKey: ["activity-images", "theme-relax"],
		queryFn: getImagesThemeRelax,
	})

	return {imagesDefault, imagesEarth, imagesRelax}
}

export const useHooksGetImageByTheme = ()=>{
	const { imagesDefault, imagesEarth, imagesRelax } = useHooksGetImages()
	const {
		theme: { current: theme },
	} = useContext(ContextMain)
	let usedHook =
		theme === "theme-default"
			? imagesDefault
			: theme === "theme-earth"
			? imagesEarth
			: imagesRelax
	return usedHook
}

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
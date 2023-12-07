import { useQuery } from "@tanstack/react-query"
import { getImagesThemeDefault, getImagesThemeEarth, getImagesThemeRelax } from "../services/supabase-storage"

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

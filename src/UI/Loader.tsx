type Props = {
	width?: "sm" | "md" | "lg"
	scene?: "dark" | "light"
	opacity?: "opacity-100"|"opacity-80"|"opacity-50"
}

export const LoaderDefault: React.FC<Props> = ({
	scene = "light",
	width = "sm",
	opacity = "opacity-100"
}) => {
	const sceneColor = scene === "dark" ? "contrast" : "color"
	const widthContainer =
		width === "sm" ? "w-10" : width === "md" ? "w-16" : "w-24"
	return (
		<div
			className={`flex flex-row space-x-1 justify-around items-center animate-loaderDefault ${widthContainer} ${opacity}`}
		>
			<div
				id="bar-1"
				className={`w-full h-8 rounded-full bg-primary-main-${sceneColor}`}
			></div>
			<div
				id="bar-2"
				className={`w-full h-10 rounded-full bg-primary-main-${sceneColor}`}
			></div>
			<div
				id="bar-3"
				className={`w-full h-12 rounded-full bg-primary-main-${sceneColor}`}
			></div>
			<div
				id="bar-4"
				className={`w-full h-10 rounded-full bg-primary-main-${sceneColor}`}
			></div>
			<div
				id="bar-5"
				className={`w-full h-8 rounded-full bg-primary-main-${sceneColor}`}
			></div>
		</div>
	)
}

type PropsLoaderError = {
	error: Error,
	justifyContent?: string,
	alignItems?: string
}
export const LoaderError:React.FC<PropsLoaderError> = ({error, justifyContent="justify-start", alignItems="items-start"})=>{
	return <div className={`flex flex-col space-y-1 ${justifyContent} ${alignItems}`}>
		<h1 className="text-lg text-danger-dark-color font-semibold">{error.name}</h1>
		<p className="text-xs text-danger-main-color font-light">{error.message}</p>
	</div>
}
type Props = {
	width?: "sm" | "md" | "lg"
	scene?: "dark" | "light"
	opacity?: "opacity-100" | "opacity-80" | "opacity-50"
}

export const LoaderDefault: React.FC<Props> = ({
	scene = "light",
	width = "sm",
	opacity = "opacity-100",
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
	error: Error|null
	justifyContent?: "justify-start"|"justify-end"|"justify-center"
	alignItems?: "items-start"|"items-end"|"items-center"
	headerClass?: string
	contentClass?: string
}
export const LoaderError: React.FC<PropsLoaderError> = ({
	error,
	justifyContent = "justify-start",
	alignItems = "items-start",
	headerClass = "text-danger-main-color",
	contentClass = "text-danger-main-color",
}) => {
	return (
		<div
			className={`flex flex-col space-y-1 ${justifyContent} ${alignItems}`}
		>
			<h1 className={`text-lg font-semibold ${headerClass}`}>
				{error?.name}
			</h1>
			<p className={`text-xs font-light ${contentClass}`}>
				{error?.message}
			</p>
		</div>
	)
}


export const LoaderSpinner: React.FC<Props> = ({
	opacity = "opacity-100",
	scene = "dark",
	width = "sm",
}) => {
	const sceneColor = scene === "dark" ? "contrast" : "color"
	const size =
		width === "sm"
			? "w-8 h-8 border-[3px]"
			: width === "md"
			? "w-16 h-16 border-[6px]"
			: "w-24 h-24 border-[12px]"
	return (
		<>
			<span
				className={`
			relative inline-block rounded-full box-border animate-loaderSpin border-dotted border-primary-main-${sceneColor} ${size} ${opacity}
		`}
			></span>
		</>
	)
}
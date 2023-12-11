type Props = {
	width?: "sm" | "md" | "lg"
	scene?: "dark" | "light"
}

export const LoaderDefault: React.FC<Props> = ({
	scene = "light",
	width = "sm",
}) => {
	const sceneColor = scene === "dark" ? "contrast" : "color"
	const widthContainer =
		width === "sm" ? "w-10" : width === "md" ? "w-16" : "w-24"
	return (
		<div
			className={`flex flex-row space-x-1 justify-around items-center animate-loaderDefault ${widthContainer}`}
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

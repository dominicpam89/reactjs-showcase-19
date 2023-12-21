export type TypeThemeSelection =
	| "theme-default"
	| "theme-relax"
	| "theme-default-invert"
	| "theme-relax-invert"

export type TypeContextTheme = {
	current: TypeThemeSelection
	changeTheme: (selectedTheme: TypeThemeSelection) => void
}

export type TypeContextThemeSelection = {
	visible: boolean,
	open: ()=>void
	close: ()=>void
	toggle: ()=>void
}

export type TypeContextModal = {
	visibility: boolean
	show: () => void
	hide: () => void
}

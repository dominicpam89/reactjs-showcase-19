export type TypeThemeSelection = "theme-default" | "theme-relax" | "theme-earth"

export type TypeContextTheme = {
	current: TypeThemeSelection,
	changeTheme: (selectedTheme:TypeThemeSelection) => void
}
export type TypeContextModal = {
	visibility: boolean
	show: () => void
	hide: () => void
}
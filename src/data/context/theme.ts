import { TypeContextTheme, TypeContextThemeSelection } from "../types/context"

export const ContextTheme:TypeContextTheme = {
	current: "theme-default",
	changeTheme: (selectedTheme) => { selectedTheme }
}

export const ContextThemeSelection:TypeContextThemeSelection = {
	visible: false,
	open: ()=>{},
	close: ()=>{},
	toggle: ()=>{}
}
import { TypeThemeSelection } from "../types/context"

export const ContextTheme = {
	current: "theme-default",
	changeTheme: (selectedTheme:TypeThemeSelection) => { selectedTheme }
}

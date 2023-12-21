import { useState } from "react"
import { TypeThemeSelection } from "../types/context"

export const useHooksContextMain = () => {
	const [theme, setTheme] = useState<TypeThemeSelection>("theme-relax-invert")
	const _theme = {
		current: theme,
		changeTheme: (selectedTheme: TypeThemeSelection) =>
			setTheme(selectedTheme),
	}
	return _theme
}

export const useHooksModal = () => {
	const [visible, setVisible] = useState(false)
	const modalState = {
		visibility: visible,
		show: () => setVisible(true),
		hide: () => setVisible(false),
	}
	return modalState
}
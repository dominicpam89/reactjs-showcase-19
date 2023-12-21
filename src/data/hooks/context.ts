import { useState } from "react"
import { TypeThemeSelection } from "../types/context"

export const useHooksContextTheme = () => {
	const [theme, setTheme] = useState<TypeThemeSelection>("theme-default")
	const _theme = {
		current: theme,
		changeTheme: (selectedTheme: TypeThemeSelection) =>
			setTheme(selectedTheme),
	}
	return _theme
}

export const useHooksContextThemeSelect = ()=>{
	const [visible, setVisible] = useState(false)
	const themeSelection = {
		visible,
		open: ()=>setVisible(true),
		close: ()=>setVisible(false),
		toggle: ()=>setVisible(!visible)
	}
	return themeSelection
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
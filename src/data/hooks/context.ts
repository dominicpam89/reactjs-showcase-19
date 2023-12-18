import { useState } from "react"
import { TypeThemeSelection } from "../types/context"

export const useHooksContextMain = () => {
	const [theme, setTheme] = useState<TypeThemeSelection>("theme-default")
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


export const useHooksModalConfirmation = ()=>{
	const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false)
	const [failedConfirmVisible, setFailedConfirmVisible] = useState(false)
	const [completedConfirmVisible, setCompletedConfirmVisible] = useState(false)
	const modalState = {
		delete:{
			visibility: deleteConfirmVisible,
			show: ()=>setDeleteConfirmVisible(true),
			hide: ()=>setDeleteConfirmVisible(false),
		},
		failed:{
			visibility: failedConfirmVisible,
			show: ()=>setFailedConfirmVisible(true),
			hide: ()=>setFailedConfirmVisible(false),
		},
		completed:{
			visibility: completedConfirmVisible,
			show: ()=>setCompletedConfirmVisible(true),
			hide: ()=>setCompletedConfirmVisible(false),
		},
	}
	return modalState
}
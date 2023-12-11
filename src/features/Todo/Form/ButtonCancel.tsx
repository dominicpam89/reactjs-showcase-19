import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"

const ButtonCancel:React.FC<{reset:()=>void}> = ({reset}) => {
	const context = useContext(ContextMain)
	return <button
		type="button"
		className="w-full px-3 py-2 rounded-sm text-sm border border-primary-main-color text-primary-main-color"
		onClick={() => {
			reset()
			context.modal.hide()
		}}
	>
		Cancel
	</button>
}

export default ButtonCancel
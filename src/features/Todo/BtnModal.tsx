import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import UIReactIcon from "../../UI/ReactIcon"
import { BsFillHddStackFill } from "react-icons/bs"

const TodoBtnModal = () => {
	const {theme,modalForm} = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	return (
		<button
			className={`
				w-full py-4 rounded-lg text-sm flex flex-row items-center justify-center space-x-2
				${isThemeInverted?"text-primary-main-contrast":"text-info-main-color"}
			`}
			onClick={modalForm.show}
		>
			<UIReactIcon
				icon={<BsFillHddStackFill />}
				value={{ className: "h-4" }}
			/>
			<span>Add Todo</span>
		</button>
	)
}

export default TodoBtnModal
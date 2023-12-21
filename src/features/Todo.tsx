import { useContext } from "react"
import { ContextMain } from "../data/context/main"
import { AnimatePresence } from "framer-motion"
import TodoBrand from "./Todo/Brand"
import TodoForm from "./Todo/Form"
import TodoBtnModal from "./Todo/BtnModal"
import TodoTabs from "./Todo/Tabs"
import TodoList from "./Todo/List"
import TodoThemeSelect from "./Todo/ThemeSelect"

const TodoPage=()=>{
	const {theme,modalForm} = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	const twClasses = {
		container:`
			p-10 w-full min-h-screen flex flex-col space-y-14 items-center
			${isThemeInverted?"bg-primary-light-color":"bg-primary-dark-color"}
		`,
		app: "w-full flex flex-col space-y-8",
	}
	return (
		<>
			<AnimatePresence>
				{modalForm.visibility && (
						<TodoForm onClose={() => {}} />
				)}
			</AnimatePresence>
			<div id="container" className={twClasses.container}>
				<TodoBrand className="w-auto h-16" />
				<div id="app" className={twClasses.app}>
					<div id="btn-groups" className="flex flex-space-x-2 items-center">
						<TodoBtnModal />
						<TodoThemeSelect />
					</div>
					<TodoTabs />
					<TodoList />
				</div>
			</div>
		</>
	)
}
export default TodoPage
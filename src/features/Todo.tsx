import { useContext, lazy, Suspense } from "react"
import { ContextMain } from "../data/context/main"
import { LoaderDefault } from "../UI/Loader"
import { AnimatePresence } from "framer-motion"
import TodoBrand from "./Todo/Brand"
const TodoForm = lazy(()=>import("./Todo/Form"))
import TodoBtnModal from "./Todo/BtnModal"
import TodoTabs from "./Todo/Tabs"
import TodoTodos from "./Todo/Todos"

const TodoPage=()=>{
	const {theme,modalForm} = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	const twClasses = {
		container:`
			p-10 w-full min-h-screen flex flex-col space-y-14 items-center
			${isThemeInverted?"bg-primary-light-color":"bg-primary-dark-color"}
		`,
		app: "w-full flex flex-col space-y-6",
	}
	return (
		<>
			<AnimatePresence>
				{modalForm.visibility && (
					<Suspense fallback={<LoaderDefault scene="dark" />}>
						<TodoForm onClose={() => {}} />
					</Suspense>
				)}
			</AnimatePresence>
			<div id="container" className={twClasses.container}>
				<TodoBrand className="w-auto h-16" />
				<div id="app" className={twClasses.app}>
					<TodoBtnModal />
					<TodoTabs />
					<TodoTodos />
				</div>
			</div>
		</>
	)
}
export default TodoPage
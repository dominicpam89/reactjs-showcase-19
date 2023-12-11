import { useState, useContext } from "react"
import { ContextMain } from "../data/context/main"
import { useHooksGetTodos } from "../data/hooks/query"
import TodoBrand from "./Todo/Brand"
import TodoItem from "./Todo/Item"
import TodoForm from "./Todo/Form"
import TodoTab from "./Todo/Tab"
import UIReactIcon from "../UI/ReactIcon"
import { LoaderDefault } from "../UI/Loader"
import { BsFillHddStackFill } from "react-icons/bs"
import { AnimatePresence } from "framer-motion"

type Select = "active" | "completed" | "failed"
const selectedTab: Select[] = ["active", "completed", "failed"]

const BtnModal = () => {
	const context = useContext(ContextMain)
	return (
		<button
			className="w-full py-4 rounded-lg text-info-main-color text-sm flex flex-row items-center justify-center space-x-2"
			onClick={context.modal.show}
		>
			<UIReactIcon
				icon={<BsFillHddStackFill />}
				value={{ className: "h-4" }}
			/>
			<span>Add Todo</span>
		</button>
	)
}

const Tabs = () => {
	const [select, setSelect] = useState<Select>("active")
	return (
		<div id="tabs" className="w-full flex space-around">
			{selectedTab.map((tab) => (
				<TodoTab
					key={tab}
					tab={tab}
					onClick={() => setSelect(tab)}
					select={select}
				/>
			))}
		</div>
	)
}

const Todos = () => {
	const {data, error, isError, isLoading} = useHooksGetTodos()
	if(!isLoading && data) return data.map((todo) => {
		return <TodoItem key={todo.id} todo={todo} />
	})
	else if(isError) return <div>{error.message}</div>
	else if(isLoading) return <div className="w-full py-8 flex justify-center"><LoaderDefault scene="dark" /></div>
}

export default function TodoPage() {
	const context = useContext(ContextMain)
	const twClasses = {
		container:
			"p-10 w-full min-h-screen flex flex-col space-y-14 items-center bg-primary-dark-color",
		app: "w-full p-6 flex flex-col space-y-6 bg-primary-main-color",
	}
	return (
		<>
			<AnimatePresence>{context.modal.visibility && <TodoForm />}</AnimatePresence>
			<div id="container" className={twClasses.container}>
				<TodoBrand className="w-auto h-16" />
				<div id="app" className={twClasses.app}>
					<BtnModal />
					<Tabs />
					<Todos />
				</div>
			</div>
		</>
	)
}

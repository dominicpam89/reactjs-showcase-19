import { useState, useContext } from "react"
import { ContextMain } from "../data/context/main"
import { todoDummy } from "../data/todoDummy"
import TodoBrand from "./Todo/Brand"
import TodoItem from "./Todo/Item"
import TodoForm from "./Todo/Form"
import TodoTab from "./Todo/Tab"

type Select = "active" | "completed" | "failed"
const selectedTab: Select[] = ["active", "completed", "failed"]

const BtnModal = () => {
	const context = useContext(ContextMain)
	return (
		<button
			className="w-full py-2 rounded-lg border border-info-main-color text-info-main-contrast text-sm"
			onClick={context.modal.show}
		>
			Add Todo
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
	return todoDummy.map((todo) => {
		return <TodoItem key={todo.information.todo} todo={todo} />
	})
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
			{context.modal.visibility && <TodoForm />}
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

import { useState, useContext, useEffect } from "react"
import { ContextMain } from "../data/context/main"
import { useHooksGetTodos } from "../data/hooks/query"
import { useSearchParams } from "react-router-dom"
import { LoaderDefault, LoaderError } from "../UI/Loader"
import { BsFillHddStackFill } from "react-icons/bs"
import { AnimatePresence } from "framer-motion"
import TodoBrand from "./Todo/Brand"
import TodoItem from "./Todo/Item"
import TodoForm from "./Todo/Form"
import TodoTab from "./Todo/Tab"
import UIReactIcon from "../UI/ReactIcon"

const BtnModal = () => {
	const {modalForm} = useContext(ContextMain)
	return (
		<button
			className="w-full py-4 rounded-lg text-info-main-color text-sm flex flex-row items-center justify-center space-x-2"
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

type Select = "active" | "completed" | "failed"
const selectedTab: Select[] = ["active", "completed", "failed"]
const Tabs = () => {
	const [_, setSearchParams] = useSearchParams()
	const [select, setSelect] = useState<Select>("active")
	useEffect(()=>{
		setSearchParams("mode=active")
	},[])
	return (
		<div id="tabs" className="w-full flex space-around">
			{selectedTab.map((tab) => (
				<TodoTab
					key={tab}
					tab={tab}
					onClick={() => {
						setSelect(tab)
						setSearchParams(`mode=${tab}`)
					}}
					select={select}
				/>
			))}
		</div>
	)
}

const Todos = () => {
	const [searchParam] = useSearchParams()
	const mode = searchParam.get("mode")
	const { data, error, isError, isLoading } = useHooksGetTodos()
	let content:any = null
	if (!isLoading && data){
		const filteredData = data.filter(todo=>todo.status===mode)
		if (filteredData.length === 0 || !filteredData)
			content = <p className="text-primary-main-contrast/80 text-center text-sm">No activity in this category!</p>
		else 
			content = filteredData.map((todo) => {
				return <TodoItem key={todo.id} todo={todo} />
			})
	}
	else if (isError)
		content =  (
			<LoaderError
				error={error}
				headerClass="text-danger-light-color"
				contentClass="text-danger-light-color"
				alignItems="items-center"
			/>
		)
	else if (isLoading)
		content = (
			<div className="w-full py-8 flex justify-center">
				<LoaderDefault scene="dark" />
			</div>
		)
	return content
}

export default function TodoPage() {
	const {modalForm} = useContext(ContextMain)
	const twClasses = {
		container:
			"p-10 w-full min-h-screen flex flex-col space-y-14 items-center bg-primary-dark-color",
		app: "w-full flex flex-col space-y-6",
	}
	return (
		<>
			<AnimatePresence>
				{modalForm.visibility && <TodoForm onClose={()=>{}} />}
			</AnimatePresence>
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

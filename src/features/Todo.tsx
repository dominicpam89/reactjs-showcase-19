import { useState } from "react"
import { Link } from "react-router-dom"
import TodoItem from "./Todo/Item"
import { todoDummy } from "../data/todoDummy"

type Select = "active" | "completed" | "failed"
const selectedTab: Select[] = ["active", "completed", "failed"]

const TodoPage = () => {
	const [select, setSelect] = useState<Select>("active")

	const twClasses = {
		btnAddTodo: ``,
		btnSelectContainer: ``,
		btnSelect: `relative w-full px-2 py-1 bg-transparent text-primary-dark-contrast`,
	}

	return (
		<>
			<div
				id="container"
				className="p-10 w-full min-h-screen flex flex-col space-y-14 items-center bg-primary-dark-color"
			>
				<div id="brand">
					<Link to="/welcome">
						<img src="/logo/logo-white-sm.png" className="w-auto h-16" />
					</Link>
				</div>
				<div id="app" className="w-full p-6 flex flex-col space-y-6 bg-primary-main-color">
          <button className="w-full py-2 rounded-lg border border-info-main-color text-info-main-contrast text-sm">Add Todo</button>
					<div id="button-group" className="w-full flex space-around">
						{selectedTab.map((tab) => {
							return (
								<button className={twClasses.btnSelect} onClick={() => setSelect(tab)}>
									<span>{tab.at(0)?.toUpperCase()+tab.slice(1)}</span>
                  {select===tab && <span className="absolute w-[40%] -bottom-1 left-[30%] rounded-full border border-success-main-color/70"></span>}
								</button>
							)
						})}
					</div>
          {todoDummy.map(todo=>{
            return <TodoItem todo={todo} />
          })}
				</div>
			</div>
		</>
	)
}

export default TodoPage

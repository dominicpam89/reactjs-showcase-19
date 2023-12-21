import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import TodoTab from "./Tabs/Tab"

type Select = "active" | "completed" | "failed"
const selectedTab: Select[] = ["active", "completed", "failed"]
const TodoTabs = () => {
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

export default TodoTabs
import { useState } from "react"
import { BsCalendar2WeekFill, BsFillTriangleFill } from "react-icons/bs"
import { motion } from "framer-motion"
import UIReactIcon from "../ReactIcon"

const UIInputDate = () => {
	const [calVisible, setCalVisible] = useState(false)
	const toggleElement = ()=>{
		setCalVisible(!calVisible)
	}
	let labelSelectDate =
		"w-full flex flex-row px-4 py-3 justify-between items-center transition-colors duration-200 hover:cursor-pointer"
	labelSelectDate += calVisible
		? " border border-info-dark-color/50 text-info-dark-color"
		: " border border-transparent bg-info-main-color text-info-main-contrast"

	return (
		<>
			<div id="form-input-group">
				<label
					onClick={toggleElement}
					className={labelSelectDate}
					htmlFor="date"
				>
					<span className="flex space-x-2 items-center">
						<span>
							<UIReactIcon
								icon={<BsCalendar2WeekFill />}
								value={{ className: "w-auto h-3" }}
							/>
						</span>
						<span className="pt-1 text-sm">Set Deadline</span>
					</span>
					<motion.span initial={{rotateZ:0}} animate={{rotateZ: calVisible?180:0}}>
						<UIReactIcon
							icon={<BsFillTriangleFill />}
							value={{ className: "w-auto h-3" }}
						/>
					</motion.span>
				</label>
			</div>
		</>
	)
}

export default UIInputDate

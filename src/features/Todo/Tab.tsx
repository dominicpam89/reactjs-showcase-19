import { motion } from "framer-motion"

type Select = "active" | "completed" | "failed"
interface Props
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	tab: Select
	select: Select
}

const TodoTab: React.FC<Props> = (props) => {
	const { tab, select } = props
	const twClasses = {
		btnSelect: `relative w-full px-2 py-2 bg-transparent text-info-main-color text-sm`,
		underline: `absolute w-[40%] -bottom-0 left-[30%] rounded-full border border-secondary-main-color`,
	}

	return (
		<>
			<button {...props} className={twClasses.btnSelect}>
				<span>{tab.at(0)?.toUpperCase() + tab.slice(1)}</span>
				{select===tab && <motion.span layoutId="underline" className={twClasses.underline}></motion.span>}
			</button>
		</>
	)
}

export default TodoTab

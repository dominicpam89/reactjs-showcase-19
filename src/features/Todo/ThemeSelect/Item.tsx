import { useContext } from "react"
import { ThemeOption } from "../ThemeSelect"
import { ContextMain } from "../../../data/context/main"
import { Variants, motion } from "framer-motion"

type Props = { item: ThemeOption }

const twClasses = {
	main: "relative px-4 py-4 cursor-pointer",
	highlight: "absolute top-0 left-0 w-full h-full -z-[100]",
	colorList: {
		default: "text-info-main-color",
		inverted: "text-info-main-contrast",
	},
	colorHighlight: {
		default: "bg-info-main-color/30",
		inverted: "bg-info-main-contrast/30",
	},
}

const listVariant: Variants = {
	hidden: {
		x: 15,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
}

type ItemListProps = {
	item: ThemeOption
	onItemClick: () => void
	className: string
	children: React.ReactNode
}

const ItemList: React.FC<ItemListProps> = ({
	item,
	onItemClick,
	children,
	className,
}) => {
	return (
		<motion.li variants={listVariant} className={className} onClick={onItemClick}>
			<span>{item.text}</span>
			{children}
		</motion.li>
	)
}

const ThemeSelectItem: React.FC<Props> = ({ item }) => {
	const { theme, themeSelection } = useContext(ContextMain)
	const onItemClick = () => {
		theme.changeTheme(item.theme)
		themeSelection.close()
	}
	const isThemeInverted = theme.current.includes("invert")
	let listColor = isThemeInverted
		? twClasses.colorList.inverted
		: twClasses.colorList.default
	let highlightColor = isThemeInverted
		? twClasses.colorHighlight.inverted
		: twClasses.colorHighlight.default
	return (
		<ItemList
			item={item}
			onItemClick={onItemClick}
			className={`${twClasses.main} ${listColor}`}
		>
			{theme.current === item.theme && (
				<div
					id="higlight"
					className={`${twClasses.highlight} ${highlightColor}`}
				></div>
			)}
		</ItemList>
	)
}

export default ThemeSelectItem

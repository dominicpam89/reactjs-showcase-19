import { useContext } from "react"
import { ThemeOption } from "../ThemeSelect"
import { ContextMain } from "../../../data/context/main"

type MainProps = { item: ThemeOption }
type ListProps = {
	item: ThemeOption
	onItemClick: () => void
	isThemeInverted: boolean
}

const twClasses = {
	main: "relative px-4 py-4 cursor-pointer",
	colorList: {
		default: "text-info-main-color",
		inverted: "text-info-main-contrast",
	},
	colorSelectedList: {
		default: "bg-info-main-color text-info-main-contrast",
		inverted: "bg-info-main-contrast text-info-main-color",
	},
}

const List: React.FC<ListProps> = ({ item, onItemClick, isThemeInverted }) => {
	let color = isThemeInverted
		? twClasses.colorList.inverted
		: twClasses.colorList.default
	return (
		<li className={`${twClasses.main} ${color}`} onClick={onItemClick}>
			{item.text}
		</li>
	)
}

const SelectedList: React.FC<ListProps> = ({
	item,
	onItemClick,
	isThemeInverted,
}) => {
	let color = isThemeInverted
		? twClasses.colorSelectedList.inverted
		: twClasses.colorSelectedList.default
	return (
		<li className={`${twClasses.main} ${color}`} onClick={onItemClick}>
			{item.text}
		</li>
	)
}

const ThemeSelectItem: React.FC<MainProps> = ({ item }) => {
	const { theme } = useContext(ContextMain)
	const isThemeInverted = theme.current.includes("invert")
	const onItemClick = () => theme.changeTheme(item.theme)
	if (item.theme === theme.current) {
		return (
			<SelectedList
				item={item}
				onItemClick={onItemClick}
				isThemeInverted={isThemeInverted}
			/>
		)
	} else {
		return (
			<List
				item={item}
				onItemClick={onItemClick}
				isThemeInverted={isThemeInverted}
			/>
		)
	}
}

export default ThemeSelectItem

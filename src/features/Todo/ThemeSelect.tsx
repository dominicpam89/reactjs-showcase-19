import { TypeThemeSelection } from "../../data/types/context"
import ThemeSelectItem from "./ThemeSelect/Item"
import ThemeSelectButton from "./ThemeSelect/Button"
import ThemeSelectItemContainer from "./ThemeSelect/ItemContainer"
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { AnimatePresence } from "framer-motion"

export type ThemeOption = { theme: TypeThemeSelection; text: string }
const themeOptions: ThemeOption[] = [
	{ theme: "theme-default", text: "Elegant" },
	{ theme: "theme-relax", text: "Nature" },
	{ theme: "theme-default-invert", text: "Simple Elegant" },
	{ theme: "theme-relax-invert", text: "Simple Nature" },
]

const TodoThemeSelect = () => {
	const { themeSelection } = useContext(ContextMain)
	return (
		<div className="relative w-full rounded-lg text-sm">
			<AnimatePresence>
				<ThemeSelectButton key="button" themeOptions={themeOptions} />
				{themeSelection.visible && (
					<ThemeSelectItemContainer key="items">
						{themeOptions.map((opt) => (
							<ThemeSelectItem item={opt} key={opt.text} />
						))}
					</ThemeSelectItemContainer>
				)}
			</AnimatePresence>
		</div>
	)
}

export default TodoThemeSelect

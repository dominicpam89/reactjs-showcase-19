import { TypeThemeSelection } from "../../data/types/context"
import ThemeSelectItem from "./ThemeSelect/Item"
import ThemeSelectButton from "./ThemeSelect/Button"
import ThemeSelectItemContainer from "./ThemeSelect/ItemContainer"

export type ThemeOption = { theme: TypeThemeSelection; text: string }
const themeOptions: ThemeOption[] = [
	{ theme: "theme-default", text: "Elegant" },
	{ theme: "theme-relax", text: "Nature" },
	{ theme: "theme-default-invert", text: "Simple Elegant" },
	{ theme: "theme-relax-invert", text: "Simple Nature" },
]

const TodoThemeSelect = () => {
	return (
		<div className="relative w-full rounded-lg text-sm">
			<ThemeSelectButton />
			<ThemeSelectItemContainer>
				{themeOptions.map((opt) => (
						<ThemeSelectItem item={opt} key={opt.text} />
					))}
			</ThemeSelectItemContainer>
		</div>
	)
}

export default TodoThemeSelect

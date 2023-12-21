import { useContext } from "react";
import { TypePropsChildren } from "../../../data/types/common";
import { ContextMain } from "../../../data/context/main";

const ThemeSelectItemContainer:React.FC<TypePropsChildren> = ({children}) => {
  const isThemeInverted = useContext(ContextMain).theme.current.includes("invert")
	return <>
    <div
				id="selection"
				className={`
					absolute z-[1000] w-full top-12 rounded-sm text-sm
					${isThemeInverted?"bg-primary-main-contrast":"bg-primary-main-color"}
				`}
			>
				<ul className="leading-8">
					{children}
				</ul>
			</div>
  </>
}
 
export default ThemeSelectItemContainer;
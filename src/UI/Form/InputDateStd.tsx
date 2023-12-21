import { useContext } from "react"
import { TypeInput } from "../../data/types/Props"
import { getFormDate } from "../../data/utils/todoForm"
import UIInputHelperText from "./HelperText"
import { ContextMain } from "../../data/context/main"

const UIInputDateStd:React.FC<TypeInput> = ({id, label, register=undefined, error=undefined}) => {
	const isThemeInverted = useContext(ContextMain).theme.current.includes("invert")
	return (
		<div className="flex flex-col space-y-1">
			<label htmlFor={id} className="text-sm text-primary-main-color/50">
				{label}
			</label>
			<input
				id={id}
				type="date"
				className={`
					w-full p-3 text-sm font-sans border
					${
						isThemeInverted
							? "border-primary-main-contrast/50 text-primary-main-contrast/80"
							: "border-primary-main-color/50 text-primary-main-color/80"
					}
				`}
				min={getFormDate(new Date())}
				{...register}
			/>
			<UIInputHelperText text={error} />
		</div>
	)
}

export default UIInputDateStd

import { TypeInput } from "../../data/types/Props"
import UIInputHelperText from "./HelperText"

const UIInputDateStd:React.FC<TypeInput> = ({id, label, register=undefined, error=undefined}) => {
	const now = new Date()
	const dateVal = {
		year: now.getFullYear(),
		month: now.getMonth(),
		date: now.getDate(),
	}
	const formattedDate = `${dateVal.year}-${dateVal.month}-${dateVal.date}`

	return (
		<div className="flex flex-col space-y-1">
			<label htmlFor={id} className="text-sm text-primary-main-color/50">{label}</label>
			<input
				id={id}
				type="date"
				className="w-full p-3 text-sm font-sans border border-primary-main-color/50 text-primary-main-color/80"
				defaultValue={formattedDate}
				{...register}
			/>
			<UIInputHelperText text={error} />
		</div>
		
	)
}

export default UIInputDateStd

import { TypeInputFieldArea } from "../../data/types/Props"
import UIInputHelperText from "./HelperText"
import { utilsGetInputTwClassesColor as getInputClasses } from "../../data/utils/todoForm"

const UIInputFieldArea: React.FC<TypeInputFieldArea> = ({
	id,
	label,
	rows = 3,
	register = undefined,
	error = undefined,
	inputState,
	maxLength = undefined,
}) => {
	const { inputClass, labelClass } = getInputClasses(error)
	return (
		<>
			<div id="form-input-group" className="relative">
				<textarea
					id={id}
					rows={rows}
					className={`
						block px-2.5 pb-2.5 pt-4 w-full text-sm 
						bg-transparent rounded-sm border appearance-none
            focus:outline-none focus:ring-1 focus:border-1 peer
						${inputClass}
					`}
					placeholder=""
					{...register}
				/>
				<label
					htmlFor={id}
					className={`
							absolute top-2 origin-[0] px-2
							text-sm duration-300 transform -translate-y-4 scale-75 
							bg-primary-main-contrast
							peer-focus:px-2 peer-focus:text-primary-main-color
							peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[20%] 
							peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
							peer-focus:start-4
							rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
							${labelClass}
						`}
				>
					{label}
				</label>
				<div className="w-full pt-4 -mb-2 grid grid-cols-[1fr_auto]">
					<UIInputHelperText text={error} />
					{!error && <div className="w-full"></div>}
					{maxLength && (
						<div className="-translate-y-2 text-xs text-primary-main-color/50">
							{inputState.length}/{maxLength}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default UIInputFieldArea

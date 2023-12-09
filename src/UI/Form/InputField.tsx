import { TypeInputField } from "../../data/types/Props"
import UIInputHelperText from "./HelperText"

const UIInputField:React.FC<TypeInputField> = ({id,label,type="text",register=undefined, error=undefined}) => {
	return (
		<>
			<div id="form-input-group" className="relative">
				<input
					type={type}
					id={id}
					className="block px-2.5 pb-2.5 pt-4 w-full text-sm 
              text-primary-main-color bg-transparent rounded-sm border border-primary-main-color/50 appearance-none
              focus:outline-none focus:ring-1 focus:border-1 focus:border-primary-main-color/50 peer"
					placeholder=""
					{...register}
				/>
				<label
					htmlFor={id}
					className="absolute top-2 origin-[0] px-2
            text-sm text-primary-main-color duration-300 transform -translate-y-4 scale-75 
            bg-primary-main-contrast
            peer-focus:px-2 peer-focus:text-primary-main-color  
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
            peer-focus:start-4
            rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
				>
					{label}
				</label>
			</div>
			<UIInputHelperText text={error} />
		</>
	)
}

export default UIInputField
